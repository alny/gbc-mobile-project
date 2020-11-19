import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Layout, Text } from "@ui-kitten/components";

export const ProfileSetting = (props) => {
  const { style, hint, value, ...layoutProps } = props;

  const renderHintElement = () => (
    <Text
      style={{
        fontFamily: "Poppins_500Medium",
        fontSize: 14,
      }}
      appearance="hint"
      category="s1"
    >
      {hint}
    </Text>
  );

  return (
    <React.Fragment>
      <Layout level="1" {...layoutProps} style={[styles.container, style]}>
        {hint && renderHintElement()}
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
          }}
          category="s1"
        >
          {value}
        </Text>
      </Layout>
      <Divider />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
