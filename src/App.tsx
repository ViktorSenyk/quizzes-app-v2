import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from './features/quizzes/quizzes.selectors';
import {
  fetchSelectedQuizzesData,
  setCurrentGameResult,
  setStatisticData,
} from './features/quizzes/quizzes.actions';

import { AppProps, RootState } from './features/quizzes/types';

import Header from './features/quizzes/components/header/index';
import QuizzesList from './features/quizzes/components/quizzesList/index';
import QuizzesGame from './features/quizzes/components/quizzesGame/index';
import QuizzesResult from './features/quizzes/components/quizzesResult/index';
import QuizzesStatistic from './features/quizzes/components/quizzesStatistic/index';
import Footer from './features/quizzes/components/footer/index';

const App: FC<AppProps> = ({
  quizzesList,
  fetchSelectedQuizzesData,
  selectedQuizzesData,
  currentGameResult,
  setCurrentGameResult,
  statisticData,
  setStatisticData,
}) => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <QuizzesList
                quizzesList={quizzesList}
                fetchSelectedQuizzesData={fetchSelectedQuizzesData}
              />
            }
          />
          <Route
            path="/game"
            element={
              <QuizzesGame
                selectedQuizzesData={selectedQuizzesData}
                setCurrentGameResult={setCurrentGameResult}
                setStatisticData={setStatisticData}
              />
            }
          />
          <Route path="/result" element={<QuizzesResult currentGameResult={currentGameResult} />} />
          <Route path="/statistic" element={<QuizzesStatistic statisticData={statisticData} />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const mapState = (state: RootState) => ({
  quizzesList: selectors.quizzesListSelector(state),
  selectedQuizzesData: selectors.selectedQuizzesDataSelector(state),
  currentGameResult: selectors.currentGameResultSelector(state),
  statisticData: selectors.statisticDataSelector(state),
});

const mapDispatch = {
  fetchSelectedQuizzesData,
  setCurrentGameResult,
  setStatisticData,
};

export default connect(mapState, mapDispatch)(App);
