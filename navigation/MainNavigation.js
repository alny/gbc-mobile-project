import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { MaterialIcons, AntDesign, EvilIcons } from "@expo/vector-icons";
import HomeScreen, { HomeScreenOptions } from "../screens/Home/HomeScreen";
import RestaurantScreen, {
  RestaurantScreenOptions,
} from "../screens/Restaurant/RestaurantScreen";
import ProfileScreen, {
  ProfileScreenOptions,
} from "../screens/Profile/ProfileScreen";
import SingleRestaurantScreen, {
  SingleRestaurantScreenOptions,
} from "../screens/Restaurant/SingleRestaurantScreen";
import SearchRestaurantScreen, {
  SearchRestaurantScreenOptions,
} from "../screens/Restaurant/SearchRestaurantScreen";

const Tabs = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#0c69a6",
        inactiveTintColor: "#ccc",
        inactiveBackgroundColor: "#fff",
        activeBackgroundColor: "#fff",
        style: { borderTopColor: "#3ca452ed", height: 60 },
        keyboardHidesTabBar: true,
        showLabel: true,
        tabStyle: {
          padding: 6,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <AntDesign name="home" size={24} color={tabInfo.color} />;
          },
          tabBarColor: Colors.primaryColor,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="Restaurant"
        component={RestaurantNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="restaurant-menu"
                size={24}
                color={tabInfo.color}
              />
            );
          },
          tabBarColor: Colors.primaryColor,
          tabBarLabel: "Restaurants",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <EvilIcons name="user" size={28} color={tabInfo.color} />;
          },
          tabBarColor: Colors.primaryColor,
          tabBarLabel: "Profil",
        }}
      />
    </Tabs.Navigator>
  );
};

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
      <HomeStackNavigator.Screen
        name="SingleRestaurant"
        component={SingleRestaurantScreen}
        options={SingleRestaurantScreenOptions}
      />
    </HomeStackNavigator.Navigator>
  );
};

const RestaurantStackNavigator = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStackNavigator.Navigator>
      <RestaurantStackNavigator.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={RestaurantScreenOptions}
      />
      <RestaurantStackNavigator.Screen
        name="SingleRestaurant"
        component={SingleRestaurantScreen}
        options={SingleRestaurantScreenOptions}
      />
      <RestaurantStackNavigator.Screen
        name="SearchRestaurant"
        component={SearchRestaurantScreen}
        options={SearchRestaurantScreenOptions}
      />
    </RestaurantStackNavigator.Navigator>
  );
};

const ProfileStackNavigator = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={ProfileScreenOptions}
      />
    </ProfileStackNavigator.Navigator>
  );
};
