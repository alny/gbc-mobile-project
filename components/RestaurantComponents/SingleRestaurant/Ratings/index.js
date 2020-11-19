import React, { useState } from "react";
import { View } from "react-native";
import {
  Input,
  Layout,
  Button,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { KeyboardAvoidingView } from "../../../components/UI-Kitten/3rd-party";
import { Rating } from "./Rating";
import Toast from "react-native-toast-message";

export default (props) => {
  const styles = useStyleSheet(themedStyles);
  const [inputComment, setInputComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Layout level="1">
        <Input
          style={styles.commentInput}
          labelStyle={styles.commentInputLabel}
          label="Rating:"
          placeholder="Add Rating"
          value={inputComment}
          onChangeText={setInputComment}
        />
        <View style={{ padding: 20 }}>
          <Button
            disabled={isDisabled}
            appearance="outline"
            size="small"
            status="basic"
          >
            Send rating
          </Button>
        </View>
      </Layout>
      <Rating />;
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 8,
  },
  list: {
    flex: 1,
  },
  image: {
    height: 240,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: "Poppins_500Medium",
    color: "text-basic-color",
  },
  commentInput: {
    marginHorizontal: 18,
    marginTop: 15,
  },
});
