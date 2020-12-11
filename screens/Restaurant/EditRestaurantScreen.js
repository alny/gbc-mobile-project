import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  Button,
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
  Input,
} from "@ui-kitten/components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import HeaderText from "../../components/UI/HeaderText";
import HeaderEmpty from "../../components/UI/HeaderEmpty";

const EditRestaurantScreen = (props) => {
  const styles = useStyleSheet(themedStyles);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setName(props.route.params.restaurant.name);
    setAddress(props.route.params.restaurant.address);
    setDesc(props.route.params.restaurant.desc);
    setPhone(props.route.params.restaurant.phone);
    setCity(props.route.params.restaurant.city);
  }, []);

  return (
    <View style={styles.container}>
      <Layout style={styles.form} level="1">
        <View style={{ paddingHorizontal: 10 }}>
          <Input value={name} onChangeText={(text) => setName(text)} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input value={city} onChangeText={(text) => setCity(text)} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input value={address} onChangeText={(text) => setAddress(text)} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            value={desc}
            multiline={true}
            style={{ height: 50 }}
            onChangeText={(text) => setDesc(text)}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            value={phone}
            placeholder="Enter Phone"
            onChangeText={(text) => setPhone(text)}
          />
        </View>
      </Layout>
      <Divider />
      <Button
        onPress={() => props.navigation.goBack()}
        style={styles.addButton}
        size="giant"
      >
        SAVE
      </Button>
      <Button
        style={{ marginHorizontal: 16, marginBottom: 14 }}
        status="danger"
        onPress={() => props.navigation.goBack()}
        appearance="outline"
        size="large"
      >
        DELETE
      </Button>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
  form: {
    flex: 1,
    paddingHorizontal: 4,
  },
  input: {
    marginHorizontal: 12,
    marginVertical: 8,
  },
  middleContainer: {
    flexDirection: "row",
    padding: 10,
  },
  middleInput: {
    width: "100%",
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 24,
    backgroundColor: "#3ca452",
    borderColor: "#3ca452",
  },
});

export const EditRestaurantScreenOptions = (navData) => {
  return {
    headerTitle: () => <HeaderText text="Edit Restaurant" />,
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
    headerStyle: {
      backgroundColor: "#fff",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };
};

export default EditRestaurantScreen;
