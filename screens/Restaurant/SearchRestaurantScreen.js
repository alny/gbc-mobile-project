import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import HeaderText from "../../components/UI/HeaderText";
import HeaderEmpty from "../../components/UI/HeaderEmpty";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

let tagArray = [
  {
    name: "Choose Tags",
    id: 0,
    children: [
      { id: 1, name: "Mexican", value: "mexican" },
      { id: 2, name: "Italian", value: "italian" },
      { id: 3, name: "Thai food", value: "thai food" },
      { id: 4, name: "Vegan", value: "vegan" },
      { id: 5, name: "Danish", value: "danish" },
    ],
  },
];

const SearchRestaurantScreen = (props) => {
  const styles = useStyleSheet(themedStyles);

  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const onSelectedTypesChange = async (selectedItems) => {
    let typesArray = [];
    await asyncForEach(tagArray[0].children, async (element, i) => {
      if (selectedItems.includes(element.id)) {
        typesArray.push({ tag: element.value });
      }
    });
    setTypes(typesArray);
    setSelectedTypes(selectedItems);
  };

  return (
    <View style={styles.container}>
      <Layout style={styles.form} level="1">
        <View style={{ paddingRight: 10, paddingLeft: 10 }}>
          <SectionedMultiSelect
            IconRenderer={MaterialIcons}
            items={tagArray}
            uniqueKey="id"
            subKey="children"
            displayKey="name"
            hideSearch={true}
            confirmText={"Save"}
            style={styles.input}
            selectText="Choose Tag..."
            showDropDowns={true}
            readOnlyHeadings={true}
            expandDropDowns={true}
            showChips={false}
            showCancelButton={true}
            colors={{ primary: "#3ca452", selectToggleTextColor: "#666" }}
            onSelectedItemsChange={(i) => onSelectedTypesChange(i)}
            selectedItems={selectedTypes}
          />
        </View>
      </Layout>
      <Divider />
      <Button
        onPress={() => console.log("Search")}
        style={styles.addButton}
        size="giant"
      >
        SEARCH
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

export const SearchRestaurantScreenOptions = (navData) => {
  return {
    headerTitle: () => <HeaderText text="Restaurant Search" />,
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

export default SearchRestaurantScreen;
