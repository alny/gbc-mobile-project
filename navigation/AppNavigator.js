import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabsNavigator } from "./MainNavigation";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
