import React from "react";
import { StyleService } from "@ui-kitten/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeaderText from "../../components/UI/HeaderText";
import HeaderAvatar from "../../components/UI/HeaderAvatar";
import { HomeComponent } from "../../components/HomeComponents/HomeComponent";

const TopTab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <TopTab.Navigator
      lazy={true}
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
      <TopTab.Screen name="Overview" component={HomeComponent} />
      <TopTab.Screen name="More" component={HomeComponent} />
    </TopTab.Navigator>
  );
};

const styles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const HomeScreenOptions = (navData) => {
  return {
    headerTitle: false,
    headerLeft: () => <HeaderText fontSize={22} text="Home" />,
    headerRight: () => <HeaderAvatar {...navData} />,
    headerStyle: {
      backgroundColor: "#fff",
      shadowColor: "transparent",
      elevation: 0,
      borderBottomWidth: 0,
    },
  };
};

export default HomeScreen;
