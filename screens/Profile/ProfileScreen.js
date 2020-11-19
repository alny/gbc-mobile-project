import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeaderText from "../../components/UI/HeaderText";
import HeaderAvatar from "../../components/UI/HeaderAvatar";
import ProfileComponent from "../../components/ProfileComponents/ProfileComponent";

const TopTab = createMaterialTopTabNavigator();

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
      <TopTab.Screen name="More Info" component={ProfileComponent} />
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
