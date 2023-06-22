import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ResultData } from '../../entities/interfaces';

import './quizzesResult.styles.scss';

// interface CurrentGameResult {
//   category: string;
//   time: string;
//   scores: string;
// }

interface QuizzesResultProps {
  currentGameResult: ResultData | null;
}

const QuizzesResult: FC<QuizzesResultProps> = ({ currentGameResult }) => {
  // const { category, time, scores } = currentGameResult;
  const category = '';
  const time = '';
  const scores = '';
  return (
    currentGameResult && (
      <section className="result">
        <h2 className="result__scores">
          <span>Correct answers:</span> {scores}
        </h2>
        <p className="result__time">
          <span>Time:</span> {time}
        </p>
        <p className="result__category">
          <span>Category:</span> {category}
        </p>
        <div className="result__btn-wrap">
          <Link className="result__btn" to="/">
            Back to List
          </Link>
          <Link className="result__btn" to="/statistic">
            Go to Statistic
          </Link>
        </div>
      </section>
    )
  );
};

export default QuizzesResult;
