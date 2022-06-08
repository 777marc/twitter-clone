import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import TweetItem from "./components/TweetItem";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/api/tweets").then((res) => {
      setData(res.data);
    });
  }, []);

  const gotoNewTweet = () => {
    navigation.navigate("New Tweet");
  };

  const renderItem = ({ item }) => (
    <TweetItem tweet={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.tweetSeperator}></View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => gotoNewTweet()}
      >
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetSeperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d9bf1",
    position: "absolute",
    bottom: 20,
    right: 12,
  },
});
