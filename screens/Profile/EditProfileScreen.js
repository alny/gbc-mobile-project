import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
  Input,
} from "@ui-kitten/components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import HeaderText from "../../components/UI/HeaderText";
import HeaderEmpty from "../../components/UI/HeaderEmpty";

const EditProfileScreen = (props) => {
  const styles = useStyleSheet(themedStyles);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Layout style={styles.form} level="1">
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            placeholder="Enter name"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            placeholder="Enter Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            placeholder="Enter Phone"
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            placeholder="Enter Address"
            onChangeText={(text) => setAddress(text)}
          />
        </View>
      </Layout>
      <Divider />
      <Button
        onPress={() => props.navigation.goBack()}
        style={styles.addButton}
        size="giant"
      >
        SAVE
      </Button>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
  form: {
    flex: 1,
    paddingHorizontal: 4,
  },
  input: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
  middleContainer: {
    flexDirection: "row",
    padding: 10,
  },
  middleInput: {
    width: "100%",
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 24,
    backgroundColor: "#3ca452",
    borderColor: "#3ca452",
  },
});

export const EditProfileScreenOptions = (navData) => {
  return {
    headerTitle: () => <HeaderText text="Edit Profile" />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          onPress={() => navData.navigation.goBack()}
          IconComponent={Ionicons}
          iconSize={22}
          title="Back"
          iconName={"ios-arrow-back"}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderEmpty}>
        <Item
          IconComponent={Ionicons}
          iconSize={22}
          title="Back"
          iconName={"ios-arrow-back"}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: "#fff",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };
};

export default EditProfileScreen;
