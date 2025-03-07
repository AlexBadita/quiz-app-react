import { Text, View } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";
import { QuestionStatus } from "@/types/types";

interface QuizProgressProps {
  currentQuestion: number;
  statusQuestions: QuestionStatus[];
}

const QuizProgress = ({
  currentQuestion,
  statusQuestions,
}: QuizProgressProps) => {
  return (
    <View>
      {/* Question Number */}
      <View className="flex-row justify-center mt-2.5">
        <Text className="text-white text-[40px]">
          Question {currentQuestion + 1}
        </Text>
        <Text className="text-neutral-600 text-[40px]">/10</Text>
      </View>

      {/* Progress Bar */}
      <ProgressBar
        statusQuestions={statusQuestions}
        currentQuestion={currentQuestion}
      />
    </View>
  );
};

export default QuizProgress;
