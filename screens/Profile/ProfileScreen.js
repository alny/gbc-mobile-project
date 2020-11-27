import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeaderText from "../../components/UI/HeaderText";
import HeaderAvatar from "../../components/UI/HeaderAvatar";
import ProfileComponent from "../../components/ProfileComponents/ProfileComponent";

const TopTab = createMaterialTopTabNavigator();

const AboutComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
        Group:
      </Text>
      <Text style={{ fontSize: 14, fontFamily: "Poppins_700Bold" }}>
        Alexander Nygaard
      </Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        tabStyle: {
          borderBottomColor: "#0c69a6",
          borderTopColor: "#0c69a6",
        },
        style: {
          marginTop: -8,
        },
        activeTintColor: "#0c69a6",
        indicatorStyle: {
          borderColor: "#0c69a6",
          borderBottomWidth: 3,
        },
        labelStyle: { fontSize: 12, fontFamily: "Poppins_700Bold" },
      }}
    >
      <TopTab.Screen name="Settings" component={ProfileComponent} />
      <TopTab.Screen name="About" component={AboutComponent} />
    </TopTab.Navigator>
  );
};

export const ProfileScreenOptions = (navData) => {
  return {
    headerTitle: false,
    headerLeft: () => <HeaderText text="Profile" />,
    headerRight: () => <HeaderAvatar {...navData} />,
    headerStyle: {
      backgroundColor: "#fff",
      shadowColor: "transparent",
      elevation: 0,
      borderBottomWidth: 0,
    },
  };
};

export default ProfileScreen;
