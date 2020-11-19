import React, { useState, useEffect } from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { Alert, StyleSheet, Image, View, Dimensions, Text } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import FAB from "react-native-fab";
import { restaurantArrayOne } from "../../data/restaurantsData";

export const MapComponent = (props) => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 56,
    longitude: 10.5,
    latitudeDelta: 7,
    longitudeDelta: 1,
  });

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    } catch (err) {
      Alert.alert("Couldnt get location", "Try again", [{ text: "Ok" }]);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        radius={55}
        clusterColor="#0c69a6"
        initialRegion={currentLocation}
        style={styles.mapStyle}
        tracksViewChanges={true}
      >
        {restaurantArrayOne.map((restaurant) => {
          return (
            <Marker
              key={restaurant.id}
              coordinate={{
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
              }}
            />
          );
        })}
      </MapView>
      <FAB
        buttonColor="#0c69a6"
        iconTextColor="#FFFFFF"
        onClickAction={() => props.navigation.navigate("Search")}
        iconTextComponent={
          <FontAwesome name="search" size={24} color="black" />
        }
        visible={true}
      />
      <FAB
        buttonColor="#0c69a6"
        iconTextColor="#FFFFFF"
        onClickAction={getLocationHandler}
        iconTextComponent={
          <MaterialIcons name="my-location" size={24} color="black" />
        }
        visible={true}
        snackOffset={70}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default MapComponent;
