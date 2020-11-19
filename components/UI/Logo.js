import React from "react";
import { StyleSheet, Image, Text, View, PixelRatio } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../../assets/logo.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 70,
    opacity: 0.5,
  },
});

export default Logo;
