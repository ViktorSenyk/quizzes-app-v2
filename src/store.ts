import { createStore, combineReducers, applyMiddleware, Store, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import quizzesReducer from './features/quizzes/quizzes.reducer';
import { RootState } from './features/quizzes/entities/interfaces';

const rootReducer = combineReducers<RootState>({
  quizzes: quizzesReducer,
});

const thunkMiddleware: ThunkMiddleware<RootState, AnyAction> = thunk;

const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
