import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { List, Text } from "@ui-kitten/components";
import { ShowCard } from "./ShowCard";
import Block from "../UI/Block";
import { RestaurantList } from "../RestaurantComponents/RestaurantList";
import { restaurantArrayTwo } from "../../data/dataStorage";

export const HomeComponent = (props) => {
  const renderHorizontalTrainingItem = (info) => {
    return (
      <ShowCard {...props} style={styles.horizontalItem} restaurant={info} />
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <Block style={{ flex: 1, marginBottom: 12, marginTop: 18 }}>
        <Block row style={{ marginHorizontal: 15 }}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate("Restaurant")}
          >
            <Block
              center
              middle
              style={[
                styles.card,
                { marginRight: 15, backgroundColor: "#fff" },
              ]}
            >
              <Block center middle style={styles.icon}>
                <AntDesign style={{ color: "#fff" }} name="staro" size={20} />
              </Block>
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                  fontSize: 12,
                  fontFamily: "Poppins_700Bold",
                  color: "#5a5a5a",
                }}
              >
                Rate Restaurants
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                }}
              >
                Rate the restaurants you visit
              </Text>
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate("Restaurant")}
          >
            <Block
              center
              middle
              style={[styles.card, { backgroundColor: "#fff" }]}
            >
              <Block center middle style={styles.icon}>
                <MaterialCommunityIcons
                  style={{ color: "#fff" }}
                  name="map-search-outline"
                  size={20}
                />
              </Block>
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                  fontSize: 12,
                  fontFamily: "Poppins_700Bold",
                  color: "#5a5a5a",
                }}
              >
                Find Restaurants
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                }}
              >
                Look up good restaurants in your area
              </Text>
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      </Block>
      <View style={{ backgroundColor: "#f2f2f2" }}>
        <Text style={styles.headerTitle} appearance="hint">
          Highly rated Restaurants
        </Text>
        <List
          contentContainerStyle={styles.horizontalList}
          horizontal={true}
          style={{ backgroundColor: "#f2f2f2" }}
          showsHorizontalScrollIndicator={false}
          data={restaurantArrayTwo}
          renderItem={renderHorizontalTrainingItem}
        />
      </View>
      <Text style={styles.headerTitle} appearance="hint">
        New Restaurants
      </Text>
      <View style={{ flex: 1, height: 1750 }}>
        <RestaurantList {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#0c69a6",
    borderRadius: 5,
  },
  icon: {
    flex: 0,
    height: 48,
    width: 48,
    borderRadius: 48,
    marginBottom: 15,
    backgroundColor: "#0c69a6",
  },
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    height: "100%",
  },
});
