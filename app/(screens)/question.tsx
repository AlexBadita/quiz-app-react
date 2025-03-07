import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import Timer from "../components/Timer";
import QuizProgress from "../components/QuizProgress";
import QuizCloseModal from "../components/QuestionModal";
import QuestionContent from "../components/QuestionContent";
import { Question, QuestionStatus } from "@/types/types";
import { findNextQuestion, selectQuestions } from "@/utils/questionUtils";
import questionsData from "@/assets/data/questions.json";
import { useUserContext } from "@/context/UserContext";

const QuestionScreen = () => {
  const router = useRouter();

  // The list of questions for the current quiz
  const [questions, setQuestions] = useState<Question[]>([]);

  // Keep track of user progress
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  // Tracks the status of each question (0: unanswered, 1: correct, -1: incorrect)
  const [statusQuestions, setStatusQuestions] = useState<QuestionStatus[]>([]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);

  // Additional functions
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [pauseTimer, setPauseTimer] = useState<boolean>(false);

  const { setScore } = useUserContext();

  // Initial setup (pick 10 questions for the quiz)
  useEffect(() => {
    const selectedQuestions = selectQuestions(questionsData);
    setQuestions(selectedQuestions);
  }, []);

  // Initialize the status of each question, after the questions are picked
  useEffect(() => {
    if (questions.length > 0) {
      setStatusQuestions(new Array(questions.length).fill({ value: 0 }));
    }
  }, [questions]);

  // Return button and Modal
  const handleReturn = () => {
    setDisplayModal(true);
    setPauseTimer(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setPauseTimer(false);
  };

  const handleConfirmReturn = () => {
    setDisplayModal(false);
    router.push("/menu");
  };

  // Skip question
  const handleSkipQuestion = () => {
    if (answeredQuestions < questions.length - 1) {
      setCurrentQuestion(findNextQuestion(currentQuestion, statusQuestions));
      setSelectedAnswer(null);
    }
  };

  // Confirm answer question
  const handleNextQuestion = () => {
    // Check if the answer is correct
    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer - 1;

    // Update the correct answers count
    if (isCorrect) {
      setScore((prevCount) => prevCount + 1);
    }

    // Update the status of the current question
    setStatusQuestions((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[currentQuestion] = { value: isCorrect ? 1 : -1 };
      return newStatus;
    });

    // Update the number of questions left
    setAnsweredQuestions((prev) => prev + 1);
    // Show the right answer
    setShowCorrectAnswer(true);

    // All questions are answered
    if (answeredQuestions === questions.length - 1) {
      setTimeout(() => {
        setShowCorrectAnswer(false);
        router.push("/result");
      }, 1000);
    } else {
      // There are questions left to answer
      setTimeout(() => {
        setCurrentQuestion(findNextQuestion(currentQuestion, statusQuestions));
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
      }, 1000);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-backgroundColor">
      {/* Back Button & Timer */}
      <View className="flex-row justify-between items-center mx-4 mt-6">
        <TouchableOpacity onPress={handleReturn}>
          <MaterialIcons name="arrow-back-ios-new" size={32} color="#A2A9B1" />
        </TouchableOpacity>
        <View className="absolute left-1/2 -translate-x-1/2">
          <Text className=" text-darkGrey text-3xl">Prompt</Text>
        </View>
        <Timer pauseTimer={pauseTimer} initialMinutes={5} />
      </View>

      {/* Popup Modal */}
      <QuizCloseModal
        displayModal={displayModal}
        handleCloseModal={handleCloseModal}
        handleConfirmReturn={handleConfirmReturn}
      />

      {/* Quiz Progress */}
      <QuizProgress
        currentQuestion={currentQuestion}
        statusQuestions={statusQuestions}
      />

      {/* Question Content */}
      <QuestionContent
        question={questions[currentQuestion]?.question || "Loading..."}
        options={questions[currentQuestion]?.options || []}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        correctAnswer={questions[currentQuestion]?.correctAnswer || -1}
        showCorrectAnswer={showCorrectAnswer}
      />

      {/* Buttons */}
      <View className="flex-row justify-center gap-6 mt-10">
        <TouchableOpacity
          className="bg-lightBlue py-4 rounded-xl w-[40%]"
          onPress={handleSkipQuestion}
        >
          <Text className="text-white text-xl text-center font-semibold">
            SKIP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-4 rounded-xl w-[40%] bg-lightGreen"
          disabled={selectedAnswer === null}
          onPress={handleNextQuestion}
        >
          <Text className="text-white text-xl text-center font-semibold">
            CONFIRM
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuestionScreen;
