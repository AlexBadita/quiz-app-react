import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface AnswerOptionsProps {
  options: string[];
  selectedAnswer: number | null;
  setSelectedAnswer: (index: number) => void;
  corectAnswer: number;
  showCorrectAnswer: boolean;
}

const AnswerOptions = ({
  options,
  selectedAnswer,
  setSelectedAnswer,
  corectAnswer,
  showCorrectAnswer,
}: AnswerOptionsProps) => {
  const renderAnswerOption = (index: number, text: string) => {
    const isSelected = selectedAnswer === index;
    return (
      <TouchableOpacity
        className={`flex-row justify-between items-center py-3 px-4 rounded-2xl mx-6 border ${
          showCorrectAnswer
            ? index === corectAnswer - 1
              ? "border-lightGreen"
              : index === selectedAnswer
              ? "border-red-500"
              : "border-darkGrey"
            : isSelected
            ? "border-selected"
            : "border-darkGrey"
        }`}
        onPress={() => setSelectedAnswer(index)}
        disabled={showCorrectAnswer}
      >
        <Text
          className={`text-xl text-justify ${
            showCorrectAnswer
              ? index === corectAnswer - 1
                ? "text-lightGreen"
                : index === selectedAnswer
                ? "text-red-500"
                : "text-unselected"
              : isSelected
              ? "text-selected"
              : "text-unselected"
            // isSelected ? "text-selected" : "text-unselected"
          }`}
        >
          {text}
        </Text>
        <View
          className={`w-5 h-5 rounded-full border-2 ${
            showCorrectAnswer
              ? index === corectAnswer - 1
                ? "border-lightGreen bg-lightGreen"
                : index === selectedAnswer
                ? "border-red-500 bg-red-500"
                : "border-darkGrey"
              : isSelected
              ? "border-selected bg-selected"
              : "border-darkGrey"
          }`}
        ></View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="mt-10 gap-4 space-y-5">
      {renderAnswerOption(0, options[0])}
      {renderAnswerOption(1, options[1])}
      {renderAnswerOption(2, options[2])}
      {renderAnswerOption(3, options[3])}
    </View>
  );
};

export default AnswerOptions;
