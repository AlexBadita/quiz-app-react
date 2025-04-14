import { Stack } from "expo-router";
import "./global.css";
import { useEffect } from "react";
import { BackHandler } from "react-native";
import { UserProvider } from "@/context/UserContext";
import { CategoryProvider } from "@/context/CategoryContext";

export default function RootLayout() {
  // Disable going back
  useEffect(() => {
    const onBackPress = () => {
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, []);

  return (
    <UserProvider>
      <CategoryProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </CategoryProvider>
    </UserProvider>
  );
}
