import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./container/Home";
import Profile from "./container/Profile/index";
import EditProfile from "./container/EditProfile";
import Gold from "./container/Gold";
import AllApp from "./container/AllApp/index";
import { ThemeProvider } from "./context/ThemeContext";
import { ProfileProvider } from "./context/ProfileContext";
import SettingsScreen from "./container/Settings";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#007AFF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Edit Profile" component={EditProfile} />
            <Stack.Screen name="Gold" component={Gold} />
            <Stack.Screen name="All Apps" component={AllApp} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProfileProvider>
    </ThemeProvider>
  );
}
