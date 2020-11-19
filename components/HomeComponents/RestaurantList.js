import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import RestaurantCard from "./RestaurantCard";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";

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
          dataProvider={new DataProvider((r1, r2) => r1 !== r2).cloneWithRows([
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
              name: "Juno",
              address: "Ymervej 21",
              city: "Copenhagen",
              rating: 3.4,
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
              name: "Italian Esera",
              address: "Tunsgaardvej 65",
              city: "Copenhagen",
              rating: 4.7,
            },
            {
              id: 3,
              image:
                "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
              name: "Mexican Reedera",
              address: "Opensboulevard 6",
              city: "Copenhagen",
              rating: 5.0,
            },
          ])}
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
