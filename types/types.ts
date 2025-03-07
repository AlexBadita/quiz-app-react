export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

// 0 = unanswered
// -1 = wrong answer
// 1 = correct answer
export interface QuestionStatus {
  value: 0 | 1 | -1;
}
