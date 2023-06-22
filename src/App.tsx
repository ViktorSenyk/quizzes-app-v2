import { ComponentType } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import * as selectors from './features/quizzes/quizzes.selectors';
import {
  fetchSelectedQuizzesData,
  setCurrentGameResult,
  setStatisticData,
} from './features/quizzes/quizzes.actions';
import {
  QuizDataForList,
  QuizDataForGame,
  ResultData,
  RootState,
} from './features/quizzes/entities/interfaces';

import Header from './features/quizzes/components/header/index';
import QuizzesList from './features/quizzes/components/quizzesList/index';
import QuizzesGame from './features/quizzes/components/quizzesGame/index';
import QuizzesResult from './features/quizzes/components/quizzesResult/index';
import QuizzesStatistic from './features/quizzes/components/quizzesStatistic/index';
import Footer from './features/quizzes/components/footer/index';

type Matching<TProps, TSelected> = {
  [K in keyof TProps]: K extends keyof TSelected ? TSelected[K] : TProps[K];
};

interface AppProps {
  quizzesList: QuizDataForList[];
  fetchSelectedQuizzesData: () => void;
  selectedQuizzesData: QuizDataForGame[];
  currentGameResult: ResultData | null;
  setCurrentGameResult: () => void;
  statisticData: ResultData[];
  setStatisticData: () => void;
}

const App: ComponentType<Matching<AppProps, PropsFromRedux>> = ({
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

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);

// import React, { FC } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { connect, ConnectedProps } from 'react-redux';
// import * as selectors from './features/quizzes/quizzes.selectors';
// import {
//   fetchSelectedQuizzesData,
//   setCurrentGameResult,
//   setStatisticData,
// } from './features/quizzes/quizzes.actions';
// import { RootState, ResultData } from './features/quizzes/entities/interfaces';

// import Header from './features/quizzes/components/header/index';
// import QuizzesList from './features/quizzes/components/quizzesList/index';
// import QuizzesGame from './features/quizzes/components/quizzesGame/index';
// import QuizzesResult from './features/quizzes/components/quizzesResult/index';
// import QuizzesStatistic from './features/quizzes/components/quizzesStatistic/index';
// import Footer from './features/quizzes/components/footer/index';

// interface AppProps extends PropsFromRedux {
//   currentGameResult: ResultData;
// }

// const App: FC<AppProps> = ({
//   quizzesList,
//   fetchSelectedQuizzesData,
//   selectedQuizzesData,
//   currentGameResult,
//   setCurrentGameResult,
//   statisticData,
//   setStatisticData,
// }) => {
//   return (
//     <>
//       <Header />
//       <main className="main">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <QuizzesList
//                 quizzesList={quizzesList}
//                 fetchSelectedQuizzesData={fetchSelectedQuizzesData}
//               />
//             }
//           />
//           <Route
//             path="/game"
//             element={
//               <QuizzesGame
//                 selectedQuizzesData={selectedQuizzesData}
//                 setCurrentGameResult={setCurrentGameResult}
//                 setStatisticData={setStatisticData}
//               />
//             }
//           />
//           <Route path="/result" element={<QuizzesResult currentGameResult={currentGameResult} />} />
//           <Route path="/statistic" element={<QuizzesStatistic statisticData={statisticData} />} />
//           <Route path="*" element={<h1>Not found!</h1>} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// };

// const mapState = (state: RootState) => ({
//   quizzesList: selectors.quizzesListSelector(state),
//   selectedQuizzesData: selectors.selectedQuizzesDataSelector(state) || [],
//   currentGameResult: selectors.currentGameResultSelector(state) || null,
//   statisticData: selectors.statisticDataSelector(state),
// });

// const mapDispatch = {
//   fetchSelectedQuizzesData,
//   setCurrentGameResult,
//   setStatisticData,
// };

// const connector = connect(mapState, mapDispatch);
// type PropsFromRedux = ConnectedProps<typeof connector>;
// export default connector(App);

// import React, { FC } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as selectors from './features/quizzes/quizzes.selectors';
// import {
//   fetchSelectedQuizzesData,
//   setCurrentGameResult,
//   setStatisticData,
// } from './features/quizzes/quizzes.actions';
// import {
//   QuizDataForList,
//   QuizDataForGame,
//   ResultData,
//   RootState,
// } from './features/quizzes/entities/interfaces';

// import Header from './features/quizzes/components/header/index';
// import QuizzesList from './features/quizzes/components/quizzesList/index';
// import QuizzesGame from './features/quizzes/components/quizzesGame/index';
// import QuizzesResult from './features/quizzes/components/quizzesResult/index';
// import QuizzesStatistic from './features/quizzes/components/quizzesStatistic/index';
// import Footer from './features/quizzes/components/footer/index';

// interface AppProps {
//   quizzesList: QuizDataForList[];
//   fetchSelectedQuizzesData: () => void;
//   selectedQuizzesData: QuizDataForGame[];
//   currentGameResult: ResultData;
//   setCurrentGameResult: () => void;
//   statisticData: ResultData[];
//   setStatisticData: () => void;
// }

// const App: FC<AppProps> = ({
//   quizzesList,
//   fetchSelectedQuizzesData,
//   selectedQuizzesData,
//   currentGameResult,
//   setCurrentGameResult,
//   statisticData,
//   setStatisticData,
// }) => {
//   return (
//     <>
//       <Header />
//       <main className="main">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <QuizzesList
//                 quizzesList={quizzesList}
//                 fetchSelectedQuizzesData={fetchSelectedQuizzesData}
//               />
//             }
//           />
//           <Route
//             path="/game"
//             element={
//               <QuizzesGame
//                 selectedQuizzesData={selectedQuizzesData}
//                 setCurrentGameResult={setCurrentGameResult}
//                 setStatisticData={setStatisticData}
//               />
//             }
//           />
//           <Route path="/result" element={<QuizzesResult currentGameResult={currentGameResult} />} />
//           <Route path="/statistic" element={<QuizzesStatistic statisticData={statisticData} />} />
//           <Route path="*" element={<h1>Not found!</h1>} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// };

// const mapState = (state: RootState) => ({
//   quizzesList: selectors.quizzesListSelector(state),
//   selectedQuizzesData: selectors.selectedQuizzesDataSelector(state),
//   currentGameResult: selectors.currentGameResultSelector(state),
//   statisticData: selectors.statisticDataSelector(state),
// });

// const mapDispatch = {
//   fetchSelectedQuizzesData,
//   setCurrentGameResult,
//   setStatisticData,
// };

// export default connect(mapState, mapDispatch)(App);
