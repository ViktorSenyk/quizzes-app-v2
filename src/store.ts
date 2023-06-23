import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  AnyAction,
  Reducer,
  CombinedState,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import quizzesReducer from './features/quizzes/quizzes.reducer';
import { RootState, Action } from './features/quizzes/types';

const rootReducer: Reducer<CombinedState<RootState>, Action> = combineReducers({
  quizzes: quizzesReducer,
});

const thunkMiddleware: ThunkMiddleware<RootState, AnyAction> = thunk;

const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
