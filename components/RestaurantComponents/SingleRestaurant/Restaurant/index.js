import React, { useState } from "react";
import {
  Image,
  ScrollView,
  View,
  Modal,
  Share,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
  Card,
  StyleService,
  Text,
  List,
  useStyleSheet,
} from "@ui-kitten/components";
import { ImageOverlay } from "../../../UI/ImageOverlay";
import ImageViewer from "react-native-image-zoom-viewer";
import { Rating } from "../Ratings/Rating";
import RateModal from "../../RateModal";

const Restaurant = (props) => {
  const {
    id,
    name,
    image,
    desc,
    city,
    address,
    tags,
  } = props.route.params.restaurant;

  const [visible, setVisible] = useState(false);
  const styles = useStyleSheet(themedStyles);

  const renderImageItem = (info) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          style={styles.imageItem}
          source={{
            uri: image,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const renderBookingFooter = () => {
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: "Share restaurarnt on Email, Facebook or Twitter",
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    return (
      <View
        style={{
          paddingHorizontal: 10,
          padding: 20,
        }}
      >
        <Text style={styles.sectionLabel} category="s1">
          About Restaurant:
        </Text>
        <Text style={styles.description} appearance="hint">
          {desc}
        </Text>

        {tags && tags.length !== 0 && (
          <>
            <Text
              style={{
                paddingHorizontal: 12,
                padding: 5,
                fontFamily: "Poppins_500Medium",
              }}
              category="s1"
            >
              Tags:
            </Text>
            <View style={styles.detailsList}>
              {tags.map((tag, i) => {
                return (
                  <Button
                    key={i}
                    appearance="outline"
                    style={styles.detailItem}
                    size="tiny"
                  >
                    <Text
                      style={{
                        textTransform: "capitalize",
                        fontFamily: "Poppins_400Regular",
                        color: "#4a5568",
                        fontSize: 11,
                      }}
                    >
                      {tag}
                    </Text>
                  </Button>
                );
              })}
            </View>
            <Button
              onPress={onShare}
              appearance="outline"
              style={styles.detailItem}
              size="tiny"
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins_400Regular",
                  color: "#4a5568",
                  fontSize: 11,
                }}
              >
                Share
              </Text>
            </Button>
            <Button
              onPress={() =>
                props.navigation.navigate("EditRestaurant", {
                  restaurant: props.route.params.restaurant,
                })
              }
              appearance="outline"
              style={styles.detailItem}
              size="tiny"
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins_400Regular",
                  color: "#4a5568",
                  fontSize: 11,
                }}
              >
                Edit
              </Text>
            </Button>
          </>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <>
        <ImageOverlay
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Card
          style={styles.bookingCard}
          appearance="filled"
          disabled={true}
          footer={renderBookingFooter}
        >
          <Button
            onPress={() => setVisible(true)}
            size="small"
            style={styles.bookButton}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                fontFamily: "Poppins_700Bold",
              }}
            >
              Rate Restaurant
            </Text>
          </Button>
          <Text style={styles.title} category="h6">
            {name}
          </Text>
          <Text style={styles.rentLabel} appearance="hint" category="p2">
            Address:
          </Text>
          <Text style={styles.priceLabel} category="h6">
            <Text>
              {address}, {city}
            </Text>
          </Text>
        </Card>

        <Rating />

        <Text
          style={{ ...styles.sectionLabel, ...{ marginTop: 5 } }}
          category="s1"
        >
          Pictures
        </Text>
        <List
          contentContainerStyle={styles.imagesList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[{}]}
          renderItem={renderImageItem}
        />
      </>
      {visible && (
        <RateModal
          {...props}
          visible={visible}
          showModal={() => setVisible(false)}
        />
      )}
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-2",
  },
  image: {
    height: 360,
    overlayColor: "rgba(0, 0, 0, 0.1)",
  },
  bookingCard: {
    marginTop: -80,
    margin: 16,
  },
  title: {
    width: "100%",
    fontFamily: "Poppins_500Medium",
  },
  rentLabel: {
    marginTop: 24,
    fontFamily: "Poppins_400Regular",
  },
  priceLabel: {
    marginTop: 8,
    fontSize: 12,
  },
  bookButton: {
    position: "absolute",
    backgroundColor: "#3ca452",
    borderColor: "#3ca452",
    bottom: 75,
    right: 15,
  },
  detailsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginVertical: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    marginVertical: 4,
    borderRadius: 16,
    borderColor: "#3ca452",
  },
  optionList: {
    flexDirection: "row",
    marginHorizontal: -4,
    marginVertical: 8,
  },
  optionItem: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
  description: {
    marginHorizontal: 16,
    marginVertical: 15,
    color: "#4a5568",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  sectionLabel: {
    marginHorizontal: 12,
    fontFamily: "Poppins_500Medium",
  },
  imagesList: {
    padding: 8,
    backgroundColor: "background-basic-color-2",
  },
  imageItem: {
    width: 180,
    height: 120,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});

export default Restaurant;
