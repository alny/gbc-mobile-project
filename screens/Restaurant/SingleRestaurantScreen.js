import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import Restaurant from "../../components/RestaurantComponents/SingleRestaurant/Restaurant";
import HeaderText from "../../components/UI/HeaderText";
import HeaderEmpty from "../../components/UI/HeaderEmpty";

const SingleRestaurantScreen = (props) => {
  return <Restaurant {...props} />;
};

export const SingleRestaurantScreenOptions = (navData) => {
  return {
    headerTitle: () => <HeaderText text="Restaurant" />,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderEmpty}>
        <Item
          IconComponent={Ionicons}
          iconSize={22}
          title="Back"
          iconName={"ios-arrow-back"}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          onPress={() => navData.navigation.goBack()}
          IconComponent={Ionicons}
          iconSize={22}
          title="Back"
          iconName={"ios-arrow-back"}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: "#f2f2f2",
      shadowColor: "transparent",
      elevation: 0,
      borderBottomWidth: 0,
    },
  };
};

export default SingleRestaurantScreen;
