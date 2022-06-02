import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function TweetItem({ item, navigation }) {
  const gotoProfile = () => {
    navigation.navigate("Profile Screen");
  };

  const gotoTweetScreen = () => {
    navigation.navigate("Tweet Screen");
  };

  return (
    <View style={styles.view}>
      <View style={styles.tweetContainer}>
        <TouchableOpacity onPress={() => gotoProfile()}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https:reactnative.dev/img/tiny_logo.png",
            }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.flexRow}
            onPress={() => gotoTweetScreen()}
          >
            <Text numberOfLines={1} style={styles.tweetName}>
              {item.title}
            </Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>
              @marcos_mendoza
            </Text>
            <Text>&middot;</Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>
              9m
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tweetContentContainer}
            onPress={() => gotoTweetScreen()}
          >
            <Text style={styles.tweetContent}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              recusandae consequuntur fuga similique.
            </Text>
          </TouchableOpacity>
          <View style={styles.tweetEngagement}>
            <TouchableOpacity style={styles.flexRow}>
              <EvilIcons name="comment" size={22} color="gray" />
              <Text style={styles.textGray}>250</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <EvilIcons name="retweet" size={22} color="gray" />
              <Text style={styles.textGray}>15</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <EvilIcons name="heart" size={22} color="gray" />
              <Text style={styles.textGray}>115</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <EvilIcons
                name={Platform.OS === "ios" ? "share-apple" : "share-google"}
                size={22}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row",
    padding: 5,
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: "bold",
  },
  tweetHandle: {
    color: "gray",
    marginHorizontal: 8,
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    marginLeft: 5,
    lineHeight: 18,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
});
