import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createServer } from "miragejs";
import { events, generateEvents } from "./mock/events";
import { EventContextProvider } from "./modules/event/context";
import { user } from "./mock/users";
import { useContext, useEffect } from "react";
import { UserContextProvider, UserContext } from "./modules/user/context";
import { IUser } from "./utils/interface";
import { addUser } from "./modules/user/action";
import { Text } from "react-native";

(window as any).server = createServer({
  routes() {
    this.get("/events", () => {
      const events = generateEvents();
      return events;
    });
    this.get("/users", () => {
      return user;
    });
  },
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <UserContextProvider>
      <EventContextProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </EventContextProvider>
    </UserContextProvider>
  );
}
