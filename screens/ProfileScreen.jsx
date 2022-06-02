import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import TweetItem from "./components/TweetItem";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "First Item",
  },
  {
    id: "8",
    title: "Second Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

export default function ProfileScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TweetItem item={item} navigation={navigation} />
  );

  const profileHeader = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: "https://images.unsplash.com/photo-1654032390524-c0983123351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          }}
        />
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https:reactnative.dev/img/tiny_logo.png",
            }}
          />
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>Marc Mendoza</Text>
          <Text style={styles.profileHandle}>@marcos_mendoza</Text>
        </View>

        <View style={styles.profileContainer}>
          <Text style={styles.profileContainerText}>
            Laboris consectetur pariatur deserunt dolor cupidatat ut sint
            laboris dolor quis. Eu est pariatur aliquip et eu et eu nisi minim
            excepteur laboris ad ipsum nostrud. Magna minim veniam deserunt esse
            et culpa ea qui eiusmod sint.
          </Text>
        </View>

        <View style={styles.locationContainer}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={styles.textGray}>Orlando, FL</Text>
        </View>

        <View style={styles.linkContainer}>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => Linking.openURL("https://www.mendozacode.io/")}
          >
            <EvilIcons name="link" size={24} color="gray" />
            <Text style={styles.linkColor}>mendozacode.io</Text>
          </TouchableOpacity>
          <View style={[styles.linkItem, styles.ml4]}>
            <EvilIcons name="calendar" size={24} color="gray" />
            <Text style={styles.textGray}>Joined September 2014</Text>
          </View>
        </View>

        <View style={styles.followContainer}>
          <View style={styles.followItem}>
            <Text style={styles.followItemNumber}>509</Text>
            <Text style={styles.followItemLabel}>Following</Text>
          </View>
          <View style={[styles.followItem, styles.ml4]}>
            <Text style={styles.followItemNumber}>2,345</Text>
            <Text style={styles.followItemLabel}>Followers</Text>
          </View>
        </View>

        <View style={styles.seperator}></View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={{ backgroundColor: "white" }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={styles.tweetSeperator}></View>
        )}
        ListHeaderComponent={profileHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textGray: { color: "gray" },
  ml4: {
    marginLeft: 4,
  },
  backgroundImage: {
    width: 800,
    height: 120,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginTop: -34,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "white",
  },
  followButton: {
    backgroundColor: "#0f1418",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  profileHandle: {
    color: "gray",
    marginTop: 1,
  },
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileContainerText: {
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 12,
  },
  linkContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  linkItem: {
    flexDirection: "row",
  },
  linkColor: {
    color: "#1d9bf1",
  },
  followContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  followItem: {
    flexDirection: "row",
  },
  followItemNumber: {
    fontWeight: "bold",
  },
  followItemLabel: {
    marginLeft: 4,
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  tweetSeperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
});
