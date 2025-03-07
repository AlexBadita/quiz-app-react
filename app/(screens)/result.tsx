import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useUserContext } from "@/context/UserContext";

const ResultScreen = () => {
  const { name, score, setScore } = useUserContext();
  const router = useRouter();

  const handleTryAgain = () => {
    setScore(0);
    router.push("/question");
  };

  const handleBackToMenu = () => {
    setScore(0);
    router.push("/menu");
  };

  return (
    <View className="flex-1 bg-backgroundColor px-10 pt-16 items-center">
      {/* Title */}
      <Text className="text-white text-3xl text-center font-semibold">
        Quiz Result
      </Text>

      {/* Throphy image */}
      <Image
        className="mt-10"
        source={require("../../assets/images/trophy.png")}
      />

      {/* Congratulations Text */}
      <Text className="mt-10 text-white text-4xl font-bold text-center">
        Congratulations!
      </Text>

      {/* Username */}
      <Text className="mt-8 text-white text-3xl text-center font-medium">
        {name}
      </Text>

      {/* Score */}
      <Text className="mt-4 text-selected text-3xl text-center font-medium">
        Your Score
      </Text>
      <View className="flex-row justify-center mt-1">
        <Text className="text-lightGreen text-3xl font-medium">{score}</Text>
        <Text className="text-white text-3xl font-medium"> / 10</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        className="mt-20 w-full py-4 bg-lightBlue rounded-xl items-center"
        onPress={handleTryAgain}
      >
        <Text className="text-white text-2xl font-semibold">Try Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-5 w-full py-4 bg-white rounded-xl items-center"
        onPress={handleBackToMenu}
      >
        <Text className="text-black text-2xl font-semibold">Back To Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;
