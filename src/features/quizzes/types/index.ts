////----------redux types

export type RootState = {
  quizzes: QuizzesState;
};

export type QuizzesState = {
  quizzesList: QuizDataForList[];
  selectedQuizzesData: null | QuizDataForGame[];
  currentGameResult: null | ResultData;
  statisticData: null | ResultData[];
};

export type Action = {
  type: string;
  payload: any;
};

//----------components types

export type AppProps = {
  quizzesList: QuizDataForList[];
  fetchSelectedQuizzesData: (url: string) => void;
  selectedQuizzesData: null | QuizDataForGame[];
  currentGameResult: null | ResultData;
  setCurrentGameResult: (result: ResultData) => Action;
  statisticData: null | ResultData[];
  setStatisticData: (result: ResultData) => Action;
};

export type QuizzesListProps = {
  quizzesList: QuizDataForList[];
  fetchSelectedQuizzesData: (url: string) => void;
};

export type QuizzesGameProps = {
  selectedQuizzesData: null | QuizDataForGame[];
  setCurrentGameResult: (result: ResultData) => Action;
  setStatisticData: (result: ResultData) => Action;
};

export type QuizzesResultProps = {
  currentGameResult: null | ResultData;
};

export type QuizzesStatisticProps = {
  statisticData: null | ResultData[];
};

//----------other types

export type QuizDataForList = {
  id: number;
  title: string;
  img: string;
  url: string;
};

export type QuizDataForGame = {
  id: number;
  category: string;
  question: string;
  correct_answer: string;
};

export type ResultData = {
  id: number;
  category: string;
  time: string;
  scores: string;
};
