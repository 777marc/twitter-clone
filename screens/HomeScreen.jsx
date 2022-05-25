import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text>Home Screen</Text>
      <Button
        title="New Tweet"
        onPress={() => {
          navigation.navigate("New Tweet");
        }}
      />
      <Button
        title="Tweet Screen"
        onPress={() => {
          navigation.navigate("Tweet Screen");
        }}
      />
      <Button
        title="Profile Screen"
        onPress={() => {
          navigation.navigate("Profile Screen");
        }}
      />
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
