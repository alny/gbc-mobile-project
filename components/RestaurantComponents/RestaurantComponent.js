import React from "react";
import { View } from "react-native";
import { StyleService, Text } from "@ui-kitten/components";

const RestaurantComponent = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontFamily: "Poppins_700Bold" }}>Student Info:</Text>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            StudentId: 101325584
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            Student name: Alexander Nygaard
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleService.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
});

export default RestaurantComponent;
