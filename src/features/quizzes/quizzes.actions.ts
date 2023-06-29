import { fetchSelectedQuizzes } from '../../gateways/quizzes/index';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { QuizDataForGame, Action, ResultData, RootState } from '../../types/index';

export const ADD_SELECTED_QUIZZ_TO_STORE: string = 'QUIZZES/ADD_SELECTED_QUIZZ_TO_STORE';
export const SET_CURRENT_GAME_RESULT: string = 'QUIZZES/SET_CURRENT_GAME_RESULT';
export const SET_STATISTIC_DATA: string = 'QUIZZES/SET_STATISTIC_DATA';

const addSelectedQuizzesToStore = (quizzesData: QuizDataForGame[]): Action => ({
  type: ADD_SELECTED_QUIZZ_TO_STORE,
  payload: {
    quizzesData,
  },
});

export const fetchSelectedQuizzesData =
  (url: string): ThunkAction<void, RootState, null, Action> =>
  (dispatch: Dispatch<Action>) => {
    fetchSelectedQuizzes(url).then(({ results }) => dispatch(addSelectedQuizzesToStore(results)));
  };

export const setCurrentGameResult = (result: ResultData): Action => ({
  type: SET_CURRENT_GAME_RESULT,
  payload: {
    result,
  },
});

export const setStatisticData = (result: ResultData): Action => ({
  type: SET_STATISTIC_DATA,
  payload: {
    result,
  },
});
