import { View, Text } from "react-native";
import React from "react";
import AnswerOptions from "./AnswerOptions";

interface QuestionContentProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  setSelectedAnswer: (answer: number | null) => void;
  correctAnswer: number;
  showCorrectAnswer: boolean;
}

const QuestionContent = ({
  question,
  options,
  selectedAnswer,
  setSelectedAnswer,
  correctAnswer,
  showCorrectAnswer,
}: QuestionContentProps) => {
  return (
    <View>
      {/* Question Text */}
      <Text className="text-white text-justify text-2xl mt-10 mx-6">
        {question}
      </Text>

      {/* Answers */}
      <AnswerOptions
        options={options}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        corectAnswer={correctAnswer}
        showCorrectAnswer={showCorrectAnswer}
      />
    </View>
  );
};

export default QuestionContent;
