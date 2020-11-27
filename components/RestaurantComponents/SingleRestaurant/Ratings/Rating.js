import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "@ui-kitten/components";

export const Rating = (props) => {
  const renderCommentHeader = () => (
    <View style={styles.commentHeader}>
      <Avatar
        source={{
          uri: "https://brugminhave.s3.eu-central-1.amazonaws.com/avatar.png",
        }}
      />
      <View style={styles.commentAuthorContainer}>
        <Text category="s2">Alex</Text>
        <Text appearance="hint" category="c1">
          2 secs ago
        </Text>
      </View>
      <Button style={styles.iconButton} appearance="ghost" status="basic" />
    </View>
  );

  return (
    <Card style={styles.commentItem} header={() => renderCommentHeader()}>
      <Text
        style={{
          color: "#4a5568",
          fontFamily: "Poppins_400Regular",
          fontSize: 13,
        }}
      >
        5/5
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    marginVertical: 4,
    marginHorizontal: 16,
    borderColor: "#eee",
  },
  commentHeader: {
    flexDirection: "row",
    padding: 16,
  },
  commentAuthorContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
