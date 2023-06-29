import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  AnyAction,
  Reducer,
  CombinedState,
} from 'redux';
import thunk from 'redux-thunk';
import quizzesReducer from './features/quizzes/quizzes.reducer';
import { RootState, Action } from './types';

const rootReducer: Reducer<CombinedState<RootState>, Action> = combineReducers({
  quizzes: quizzesReducer,
});

const store: Store<RootState, AnyAction> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
