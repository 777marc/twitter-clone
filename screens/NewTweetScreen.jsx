import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function NewTweetScreen({ navigation }) {
  const [tweet, setTweet] = useState("");

  const sendTweet = () => {
    navigation.navigate("Tab");
  };
  return (
    <View style={styles.container}>
      <View style={styles.tweetButtonContainer}>
        <Text style={tweet.length > 250 ? styles.textRed : styles.textGray}>
          Characters Left: {280 - tweet.length}
        </Text>
        <TouchableOpacity
          style={styles.tweetButton}
          onPress={() => sendTweet()}
        >
          <Text style={styles.tweetButtonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetBoxContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https:reactnative.dev/img/tiny_logo.png",
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={setTweet}
          value={tweet}
          placeholder="what's the haps?"
          placeholderTextColor={"gray"}
          multiline
          maxLength={280}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  textGray: { color: "gray" },
  textRed: { color: "red" },
  ml4: {
    marginLeft: 16,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    marginTop: 10,
    borderRadius: 21,
  },
  tweetButtonContainer: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tweetButton: {
    backgroundColor: "#1d9bf1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  tweetButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  tweetBoxContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  input: { fontSize: 18, lineHeight: 28, padding: 10, flex: 1 },
});
