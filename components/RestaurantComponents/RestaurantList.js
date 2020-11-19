import React, { useState } from "react";
import { View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import RestaurantCard from "../RestaurantComponents/RestaurantCard";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { restaurantArrayOne } from "../../data/restaurantsData";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const RestaurantList = (props) => {
  const rowRenderer = (type, data) => {
    return <RestaurantCard {...props} restaurant={data} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.listStyle}>
        <RecyclerListView
          rowRenderer={rowRenderer}
          dataProvider={new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            restaurantArrayOne
          )}
          layoutProvider={
            new LayoutProvider(
              (i) => {
                return "NORMAL";
              },
              (type, dim) => {
                switch (type) {
                  case "NORMAL":
                    dim.width = SCREEN_WIDTH;
                    dim.height = 115;
                    break;
                  default:
                    dim.width = SCREEN_WIDTH;
                    dim.height = 115;
                    break;
                }
              }
            )
          }
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  screen: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  listStyle: {
    minHeight: "100%",
    flex: 1,
    paddingVertical: 10,
    paddingBottom: 5,
    paddingHorizontal: 0,
  },
});
