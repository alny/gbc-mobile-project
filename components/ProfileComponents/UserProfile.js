import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ScrollView, View } from "react-native";
import {
  Button,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  Divider,
  Toggle,
} from "@ui-kitten/components";
import { useQuery, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { ProfileSetting } from "./Settings";
import { ProfileAvatar } from "./Avatar";
import { GET_USER_PROFILE } from "../../graphql/query/getUserProfile";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import Toast from "react-native-toast-message";
import { UPDATE_PRIVATE_PROFILE } from "../../graphql/mutation/updatePrivateProfile";
import { UPDATE_YARD } from "../../graphql/mutation/updateYard";

export default (props) => {
  const styles = useStyleSheet(themedStyles);
  const currentUser = useSelector((state) => state.auth);

  const [updatePrivateProfileMutation] = useMutation(UPDATE_PRIVATE_PROFILE);
  const [updateYardMutation] = useMutation(UPDATE_YARD);

  const fetchUserProfile = useQuery(GET_USER_PROFILE, {
    variables: {
      userId: currentUser.user.user_id,
    },
    fetchPolicy: "network-only",
  });

  const [notifyChecked, setNotifyChecked] = useState(false);
  const [hideYardChecked, setHideYardChecked] = useState(false);
  const [hideProfileChecked, setHideProfileChecked] = useState(false);

  const onNotifyCheckedChange = (isChecked) => {
    setNotifyChecked(isChecked);
    if (isChecked) {
      registerForPushNotificationsAsync(isChecked);
    } else {
      updateNotify(isChecked, null);
    }
  };

  const onHideYardCheckedChange = (isChecked) => {
    setHideYardChecked(isChecked);
    updatePrivateYard(isChecked);
  };

  const onHideProfileCheckedChange = (isChecked) => {
    setHideProfileChecked(isChecked);
    updatePrivateProfile(isChecked);
  };

  const registerForPushNotificationsAsync = async (isChecked) => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Noget gik galt, prøv igen senere!");
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      await updateNotify(isChecked, token);
      await AsyncStorage.setItem(
        "expoPushToken",
        JSON.stringify({
          token,
        })
      );
    } else {
      alert("Noget gik galt, prøv igen senere!");
    }
  };

  const updateNotify = async (isChecked, token) => {
    try {
      const updateNotify = await updatePrivateProfileMutation({
        variables: {
          userId: currentUser.user.user_id,
          set: {
            notify_me: isChecked,
            notify_token: isChecked ? token && token.data : null,
          },
        },
      });
      if (
        updateNotify.data.update_backyard_user.affected_rows === 1 &&
        isChecked
      ) {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Du modtager nu notifikationer",
        });
      } else {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Du modtager ikke notifikationer længere",
        });
      }
    } catch (error) {
      console.log("error:", error);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Noget gik galt!",
      });
    }
  };

  const updatePrivateProfile = async (isChecked) => {
    try {
      const updateUser = await updatePrivateProfileMutation({
        variables: {
          userId: currentUser.user.user_id,
          set: {
            private_profile: isChecked,
          },
        },
      });
      if (
        updateUser.data.update_backyard_user.affected_rows === 1 &&
        isChecked
      ) {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Din profil er nu privat",
        });
      } else {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Din profil er ikke længere privat",
        });
      }
    } catch (error) {
      console.log("error:", error);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Noget gik galt!",
      });
    }
  };

  const updatePrivateYard = async (isChecked) => {
    try {
      const updateYard = await updateYardMutation({
        variables: {
          yardId:
            fetchUserProfile.data &&
            fetchUserProfile.data.backyard_user.length !== 0 &&
            fetchUserProfile.data.backyard_user[0].backyard &&
            fetchUserProfile.data.backyard_user[0].backyard.id,
          set: {
            private_yard: isChecked,
          },
        },
      });

      if (updateYard.data.update_backyard.affected_rows === 1 && isChecked) {
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Din have er nu privat",
        });
      } else {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Din have er ikke længere privat",
        });
      }
    } catch (error) {
      console.log("error:", error);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Noget gik galt!",
      });
    }
  };

  useEffect(() => {
    if (
      fetchUserProfile.data &&
      fetchUserProfile.data.backyard_user.length !== 0
    ) {
      setNotifyChecked(fetchUserProfile.data.backyard_user[0].notify_me);
      setHideProfileChecked(
        fetchUserProfile.data.backyard_user[0].private_profile
      );
    }

    if (
      fetchUserProfile.data &&
      fetchUserProfile.data.backyard_user.length !== 0 &&
      fetchUserProfile.data.backyard_user[0].backyard
    ) {
      setHideYardChecked(
        fetchUserProfile.data.backyard_user[0].backyard.private_yard
      );
    }
  }, [fetchUserProfile.data]);

  return (
    <>
      {!fetchUserProfile.loading ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Layout style={styles.photoSection} level="1">
            {currentUser.user && currentUser.user.image ? (
              <ProfileAvatar
                style={styles.photo}
                source={{
                  uri: currentUser.user.image,
                }}
              />
            ) : (
              <ProfileAvatar
                style={styles.photo}
                source={require("../../assets/avatar.png")}
              />
            )}

            <View style={styles.nameSection}>
              <ProfileSetting
                style={styles.setting}
                value={
                  fetchUserProfile.data &&
                  fetchUserProfile.data.backyard_user.length !== 0 &&
                  fetchUserProfile.data.backyard_user[0].first_name
                    ? fetchUserProfile.data.backyard_user[0].first_name
                    : "Ikke Angivet"
                }
              />
              <ProfileSetting
                style={styles.setting}
                value={
                  fetchUserProfile.data &&
                  fetchUserProfile.data.backyard_user.length !== 0 &&
                  fetchUserProfile.data.backyard_user[0].last_name
                    ? fetchUserProfile.data.backyard_user[0].last_name
                    : "Ikke Angivet"
                }
              />
            </View>
          </Layout>
          {fetchUserProfile.data &&
          fetchUserProfile.data.backyard_user[0].desc ? (
            <Text style={styles.description} appearance="hint">
              {fetchUserProfile.data.backyard_user[0].desc}
            </Text>
          ) : null}

          <ProfileSetting
            style={[styles.setting, styles.emailSetting]}
            hint="Email"
            value={
              fetchUserProfile.data &&
              fetchUserProfile.data.backyard_user.length !== 0 &&
              fetchUserProfile.data.backyard_user[0].user_info.email
                ? fetchUserProfile.data.backyard_user[0].user_info.email
                : "Ikke Angivet"
            }
          />
          <ProfileSetting
            style={styles.setting}
            hint="Mobil"
            value={
              fetchUserProfile.data &&
              fetchUserProfile.data.backyard_user.length !== 0 &&
              fetchUserProfile.data.backyard_user[0].user_info.phone
                ? fetchUserProfile.data.backyard_user[0].user_info.phone
                : "Ikke Angivet"
            }
          />
          <Layout level="1" style={styles.notify}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
              }}
              appearance="hint"
              category="s1"
            >
              Modtag Notifikationer
            </Text>
            <Toggle checked={notifyChecked} onChange={onNotifyCheckedChange} />
          </Layout>
          <Divider />

          <Layout level="1" style={styles.notify}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
              }}
              appearance="hint"
              category="s1"
            >
              Skjul Kontaktinfo
            </Text>
            <Toggle
              checked={hideProfileChecked}
              onChange={onHideProfileCheckedChange}
            />
          </Layout>
          {fetchUserProfile.data &&
            fetchUserProfile.data.backyard_user.length !== 0 &&
            fetchUserProfile.data.backyard_user[0].backyard && (
              <Layout level="1" style={styles.notify}>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 14,
                  }}
                  appearance="hint"
                  category="s1"
                >
                  Skjul Have
                </Text>
                <Toggle
                  checked={hideYardChecked}
                  onChange={onHideYardCheckedChange}
                />
              </Layout>
            )}

          <Divider />
          <Button
            style={styles.doneButton}
            onPress={() =>
              props.navigation.navigate("EditProfile", {
                user:
                  fetchUserProfile.data &&
                  fetchUserProfile.data.backyard_user.length !== 0 &&
                  fetchUserProfile.data.backyard_user[0],
              })
            }
          >
            Rediger Profil
          </Button>
        </ScrollView>
      ) : null}
    </>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
  notify: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  photoSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  photo: {
    aspectRatio: 1.0,
    height: 76,
  },
  photoButton: {
    aspectRatio: 1.0,
    height: 32,
    borderRadius: 16,
  },
  nameSection: {
    flex: 1,
    marginHorizontal: 8,
  },
  description: {
    padding: 24,
    backgroundColor: "background-basic-color-1",
  },
  doneButton: {
    marginHorizontal: 15,
    marginTop: 24,
    backgroundColor: "#3ca452",
    borderColor: "#3ca452",
  },
  setting: {
    padding: 16,
  },
  emailSetting: {
    marginTop: 24,
  },
});
