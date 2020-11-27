import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { MaterialIcons } from "@expo/vector-icons";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

let ratingArray = [
  {
    name: "Choose rating",
    id: 0,
    children: [
      { id: 1, name: "1", value: "1" },
      { id: 2, name: "2", value: "2" },
      { id: 3, name: "3", value: "3" },
      { id: 4, name: "4", value: "4" },
      { id: 5, name: "5", value: "5" },
    ],
  },
];

const RateModal = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [ratingSelected, setRatingSelected] = useState(null);
  const [selectedRating, setSelectedRating] = useState([]);

  const onSelectedRatingChange = async (selectedItems) => {
    let newRatingArray = [];

    await asyncForEach(ratingArray[0].children, async (element, i) => {
      if (selectedItems.includes(element.id)) {
        newRatingArray.push({ rating: element.value });
      }
    });
    setRatingSelected(newRatingArray);
    setSelectedRating(selectedItems);
  };

  const renderModalElement = () => (
    <View style={styles.modalContainer}>
      <View>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            color: "#3b5998",
            textAlign: "center",
          }}
        >
          Rate restaurant from 1-5{" "}
        </Text>
      </View>
      <View style={{ flex: 1, width: "100%", justifyContent: "center" }}></View>

      <View style={{ flexDirection: "column", marginTop: 10 }}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 4,
            paddingHorizontal: 10,
            height: 42,
            paddingTop: 10,
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          <SectionedMultiSelect
            IconRenderer={MaterialIcons}
            items={ratingArray}
            uniqueKey="id"
            subKey="children"
            displayKey="name"
            single={true}
            hideSearch={true}
            confirmText={"Save"}
            selectText="Choose Rating..."
            showDropDowns={true}
            readOnlyHeadings={true}
            styles={{
              selectToggleText: {
                fontSize: 13,
                fontFamily: "Poppins_700Bold",
              },
            }}
            expandDropDowns={true}
            showChips={false}
            showCancelButton={false}
            itemFontFamily={{ fontFamily: "Poppins_700Bold" }}
            subItemFontFamily={{ fontFamily: "Poppins_500Medium" }}
            searchTextFontFamily={{ fontFamily: "Poppins_700Bold" }}
            confirmFontFamily={{ fontFamily: "Poppins_700Bold" }}
            colors={{
              primary: "#3ca452",
              selectToggleTextColor: "#454e82",
            }}
            onSelectedItemsChange={(i) => onSelectedRatingChange(i)}
            selectedItems={selectedRating}
          />
        </View>
        <Button
          onPress={props.showModal}
          status="primary"
          appearance="outline"
          style={{
            ...styles.button,
            ...{
              width: "100%",
              borderColor: "#30375F",
              justifyContent: "center",
              borderRadius: 4,
            },
          }}
        >
          <Text
            style={{
              fontSize: 11,
              color: "#3b5998",
              fontFamily: "Poppins_700Bold",
            }}
          >
            RATE
          </Text>
        </Button>
        <Button
          status="basic"
          appearance="outline"
          style={{
            ...styles.button,
            ...{
              width: "100%",
              justifyContent: "center",
              borderRadius: 4,
            },
          }}
          disabled={props.disabled}
          onPress={props.showModal}
        >
          <Text
            style={{
              fontSize: 11,
              color: "#3b5998",
              fontFamily: "Poppins_700Bold",
            }}
          >
            CANCEL
          </Text>
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal animationIn="fadeInUp" isVisible={!!props.visible}>
        {renderModalElement()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f2f9",
    width: "100%",
  },
  modalContainer: {
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#f3f2f9",
    padding: 40,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    margin: 8,
  },
});

export default RateModal;
