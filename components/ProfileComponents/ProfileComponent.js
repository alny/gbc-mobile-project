import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { ProfileSetting } from "./Settings";
import { ProfileAvatar } from "./Avatar";

export default (props) => {
  const styles = useStyleSheet(themedStyles);

  const [firstName, setFirstName] = useState("Alexander");
  const [lastName, setlastName] = useState("Nygaard");
  const [email, setEmail] = useState("12345678");
  const [phone, setPhone] = useState("alexandernygaard@gmail.com");
  const [desc, setDesc] = useState("I love Thai, Indian, and Japanese food");

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Layout style={styles.photoSection} level="1">
          <ProfileAvatar
            style={styles.photo}
            source={require("../../assets/avatar.png")}
          />

          <View style={styles.nameSection}>
            <ProfileSetting style={styles.setting} value={firstName} />
            <ProfileSetting style={styles.setting} value={lastName} />
          </View>
        </Layout>

        <Text style={styles.description} appearance="hint">
          {desc}
        </Text>

        <ProfileSetting
          style={[styles.setting, styles.emailSetting]}
          hint="Email"
          value={phone}
        />
        <ProfileSetting style={styles.setting} hint="Mobil" value={email} />

        <Button
          onPress={() => props.navigation.navigate("EditProfile")}
          style={styles.doneButton}
        >
          Edit Profile
        </Button>
      </ScrollView>
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
