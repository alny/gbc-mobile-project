import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card } from "@ui-kitten/components";
import { ImageOverlay } from "../UI/ImageOverlay";

export const ShowCard = (props) => {
  const { style, ...cardProps } = props;

  return (
    <TouchableOpacity
      key={props.restaurant.item.id}
      style={{ height: "100%" }}
      activeOpacity={0.8}
    >
      <Card {...cardProps} style={[styles.container, style]}>
        <ImageOverlay
          style={styles.image}
          source={{
            uri: props.restaurant.item.image,
          }}
        >
          <Button style={styles.durationButton} size="tiny">
            Visit Restaurant
          </Button>
        </ImageOverlay>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  level: {
    zIndex: 1,
  },
  title: {
    zIndex: 1,
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  durationButton: {
    position: "absolute",
    left: 16,
    bottom: 16,
    backgroundColor: "#0c69a6",
    borderColor: "#0c69a6",
    borderRadius: 4,
    paddingHorizontal: 0,
  },
});
