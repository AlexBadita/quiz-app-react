import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useUserContext } from "@/context/UserContext";

const WelcomeScreen = () => {
  const router = useRouter();
  const [nameInput, setNameInput] = useState<string>("");
  const { setName } = useUserContext();

  const handleStart = () => {
    if (nameInput.trim() === "") {
      Alert.alert("Name Required", "Please enter your name before proceeding.");
    } else {
      setName(nameInput);
      router.push(`/menu`);
    }
  };

  return (
    <SafeAreaView className="w-full h-full bg-backgroundColor flex justify-center items-center">
      <Text className="text-white font-bold text-4xl mb-8">CodeQuest</Text>
      <View className=" bg-white rounded-lg p-6 w-[85%] items-center shadow-lg">
        <Text className="text-3xl font-bold text-black">Welcome</Text>
        <Text className="text-lightGray text-base mb-4">
          Please enter your name
        </Text>
        <TextInput
          className="w-full border-b border-gray-600 text-base text-darkGrey mb-6 pb-1"
          placeholder="Name"
          value={nameInput}
          onChangeText={setNameInput}
          placeholderTextColor={"#4b5563"}
        />
        <TouchableOpacity
          className="bg-lightBlue w-full rounded-md py-3"
          onPress={handleStart}
        >
          <Text className="text-white text-xl font-bold text-center">
            START
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
