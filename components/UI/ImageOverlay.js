import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const DEFAULT_OVERLAY_COLOR = "rgba(0, 0, 0, 0.35)";

export const ImageOverlay = (props) => {
  const { style, children, ...imageBackgroundProps } = props;
  const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style);

  return (
    <ImageBackground
      resizeMode={props.resizeMode || "cover"}
      {...imageBackgroundProps}
      style={imageBackgroundStyle}
    >
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: props.overlayColor || DEFAULT_OVERLAY_COLOR },
        ]}
      />
      {children}
    </ImageBackground>
  );
};
