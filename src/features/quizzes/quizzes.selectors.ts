import { RootState, QuizDataForList, QuizDataForGame, ResultData } from './types';

export const quizzesListSelector = (state: RootState): QuizDataForList[] =>
  state.quizzes.quizzesList;
export const selectedQuizzesDataSelector = (state: RootState): null | QuizDataForGame[] =>
  state.quizzes.selectedQuizzesData;
export const currentGameResultSelector = (state: RootState): null | ResultData =>
  state.quizzes.currentGameResult;
export const statisticDataSelector = (state: RootState): null | ResultData[] =>
  state.quizzes.statisticData;
