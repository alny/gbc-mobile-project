import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderText = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          flexDirection: "column",
          marginLeft: 15,
          fontSize: props.fontSize || 20,
          letterSpacing: 1,
          fontFamily: "Poppins_900Black",
          color: "#0c69a6",
          textAlign: "center",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});

export default HeaderText;
