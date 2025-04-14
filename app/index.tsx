import { View, StatusBar } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./(screens)/welcome";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Ensures status bar icons are visible */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default index;
