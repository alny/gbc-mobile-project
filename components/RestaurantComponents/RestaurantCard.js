import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const RestaurantCard = (props) => {
  return (
    <TouchableOpacity style={{ height: "100%" }} activeOpacity={0.8}>
      <View style={styles.camping}>
        <ImageBackground
          style={styles.campingImage}
          imageStyle={styles.campingImage}
          source={{
            uri: props.restaurant.image,
          }}
        />

        <View style={styles.campingDetails}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#666",
                marginTop: 10,
              }}
            >
              {props.restaurant.name}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#666" }}>
              <Entypo name="location-pin" color="#666" size={12} />{" "}
              {props.restaurant.city}
            </Text>
            <Text style={{ fontSize: 12, color: "#A5A5A5", paddingTop: 5 }}>
              {props.restaurant.address}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Entypo
                style={{ marginRight: 4 }}
                name="star-outlined"
                color="#666"
                size={12}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#A5A5A5",
                }}
              >
                Rating: {props.restaurant.rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  camping: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  campingDetails: {
    flex: 2,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 100,
  },
  campingInfo: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: 14,
  },
  campingImage: {
    width: width * 0.3,
    height: width * 0.25,
    borderRadius: 6,
  },
});
