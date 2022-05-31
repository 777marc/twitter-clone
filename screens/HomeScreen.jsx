import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

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

export default function HomeScreen({ navigation }) {
  const gotoProfile = () => {
    navigation.navigate("Profile Screen");
  };

  const gotoTweetScreen = () => {
    navigation.navigate("Tweet Screen");
  };

  const renderItem = ({ item }) => (
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
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    marginLeft: 10,
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
    lineHeight: 18,
  },
});
