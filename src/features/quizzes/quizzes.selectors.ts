import { RootState, QuizDataForList, QuizDataForGame, ResultData } from './entities/interfaces';

export const quizzesListSelector = (state: RootState): QuizDataForList[] =>
  state.quizzes.quizzesList;
export const selectedQuizzesDataSelector = (state: RootState): QuizDataForGame[] =>
  state.quizzes.selectedQuizzesData;
export const currentGameResultSelector = (state: RootState): null | ResultData =>
  state.quizzes.currentGameResult;
export const statisticDataSelector = (state: RootState): ResultData[] =>
  state.quizzes.statisticData;
