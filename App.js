import React from "react";
import { AppLoading } from "expo";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import Constants from "expo-constants";
import { enableScreens } from "react-native-screens";
import AppNavigator from "./navigation/AppNavigator";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import Toast from "react-native-toast-message";

Constants.platform.android ? enableScreens() : null;

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <AppNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ApplicationProvider>
  );
}
