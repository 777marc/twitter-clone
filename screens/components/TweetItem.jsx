import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { formatDistanceToNowStrict } from "date-fns";
import locale from "date-fns/locale/en-US";

export default function TweetItem({ tweet, navigation }) {
  const gotoProfile = () => {
    navigation.navigate("Profile Screen");
  };

  const gotoTweetScreen = () => {
    navigation.navigate("Tweet Screen");
  };

  const formatTimeDisplay = (value) => {
    let data = value.split(" ");
    return `${data[0]}${data[1].charAt(0)}`;
  };

  return (
    <View style={styles.view}>
      <View style={styles.tweetContainer}>
        <TouchableOpacity onPress={() => gotoProfile()}>
          <Image
            style={styles.avatar}
            source={{
              uri: tweet.user.avatar,
            }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.flexRow}
            onPress={() => gotoTweetScreen()}
          >
            <Text numberOfLines={1} style={styles.tweetName}>
              {tweet.user.name}
            </Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>
              @{tweet.user.username}
            </Text>
            <Text>&middot;</Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>
              {formatTimeDisplay(
                formatDistanceToNowStrict(new Date(tweet.created_at))
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tweetContentContainer}
            onPress={() => gotoTweetScreen()}
          >
            <Text style={styles.tweetContent}>{tweet.body}</Text>
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
