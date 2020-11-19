import React from "react";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const HeaderAvatar = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate("Profile")}
    >
      <View
        style={{
          ...styles.container,
          marginRight: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/avatar.png")}
          style={styles.image}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default HeaderAvatar;
