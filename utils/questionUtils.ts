import { Question, QuestionStatus } from "@/types/types";

export const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const selectQuestions = (questions: Question[]) => {
  // Shuffle the array of questions and pick the first 10 questions
  const selectQuestions = shuffleArray([...questions].slice(0, 10));

  // Shuffle the answers array of each question
  const selectedQuestions = selectQuestions.map((question) => {
    const answers = [...question.options];
    const shuffledAnswers = shuffleArray(answers);

    // Find the new correct answer index in the shuffled answers array
    const newCorrectAnswerIndex = shuffledAnswers.indexOf(
      question.options[question.correctAnswer - 1]
    );

    return {
      ...question,
      options: shuffledAnswers,
      correctAnswer: newCorrectAnswerIndex + 1,
    };
  });

  return selectedQuestions;
};

export const findNextQuestion = (
  currentQuestion: number,
  statusQuestions: QuestionStatus[]
): number => {
  var nextIndex = currentQuestion;
  const totalQuestions = statusQuestions.length;

  do {
    nextIndex++;
    // There are 10 questions, then return to start to check for unanswered questions
    if (nextIndex === totalQuestions) {
      nextIndex = 0;
    }
  } while (
    statusQuestions[nextIndex].value !== 0 &&
    nextIndex !== currentQuestion
  );

  return nextIndex;
};
