import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TweetScreen() {
  return (
    <View style={styles.view}>
      <Text>Tweet Screen</Text>
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
