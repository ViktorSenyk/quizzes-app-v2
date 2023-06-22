export interface RootState {
  quizzes: QuizzesState;
}

export interface QuizzesState {
  quizzesList: QuizDataForList[];
  selectedQuizzesData: QuizDataForGame[];
  currentGameResult: null | ResultData;
  statisticData: ResultData[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface QuizDataForList {
  id: number;
  title: string;
  img: string;
  url: string;
}

export interface QuizDataForGame {
  id: number;
  category: string;
  question: string;
  correct_answer: string;
}

export interface ResultData {
  id: number;
  category: string;
  time: string;
  scores: string;
}
