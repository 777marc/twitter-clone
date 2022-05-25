import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NewTweetScreen() {
  return (
    <View style={styles.view}>
      <Text>New Tweet Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
