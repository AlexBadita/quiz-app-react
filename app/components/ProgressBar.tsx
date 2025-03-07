import { View } from "react-native";
import React from "react";
import { QuestionStatus } from "@/types/types";

interface ProgressBarProps {
  statusQuestions: QuestionStatus[];
  currentQuestion: number;
}

const ProgressBar = ({
  statusQuestions,
  currentQuestion,
}: ProgressBarProps) => {
  const renderProgressDots = () => {
    return statusQuestions.map((status, index) => (
      <View
        key={index}
        className={`w-6 h-0.5 rounded-full ${
          index === currentQuestion
            ? "bg-white"
            : status.value === 0
            ? "bg-lightGrey"
            : status.value === 1
            ? "bg-lightGreen"
            : "bg-red-500"
        }`}
      />
    ));
  };

  return (
    <View className="flex-row justify-center gap-3 mt-5 space-x-2.5">
      {renderProgressDots()}
    </View>
  );
};

export default ProgressBar;
