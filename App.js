import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import TweetScreen from "./screens/TweetScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New Tweet" component={NewTweetScreen} />
        <Stack.Screen name="Tweet Screen" component={TweetScreen} />
        <Stack.Screen name="Profile Screen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
