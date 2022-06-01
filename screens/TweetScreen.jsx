import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";

export default function TweetScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https:reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View>
            <Text style={styles.tweetName}>Marc Mendoza</Text>
            <Text style={styles.tweetHandle}>@marcos_mendoza</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContentContainer}>
        <Text style={styles.tweetContent}>
          Nostrud ipsum dolor eu elit magna. Magna ut exercitation Lorem
          pariatur enim. Nulla sit dolor est pariatur eiusmod occaecat qui ex
          nulla non culpa nulla velit nostrud. Ipsum velit ullamco aliqua
          occaecat aliqua qui ex ea aliquip magna ea nulla. Eu labore tempor
          nisi cupidatat aliqua proident esse ea excepteur aliqua sit culpa.
        </Text>
      </View>
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
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  tweetName: {
    fontWeight: "bold",
  },
  tweetHandle: {
    color: "gray",
    marginTop: 4,
  },
  tweetContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#efe7eb",
  },
  tweetContent: {
    fontSize: 20,
    lineHeight: 30,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#efe7eb",
  },
  textGray: {
    color: "gray",
  },
});
