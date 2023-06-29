import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { QuizzesResultProps } from '../../../../types';

import './quizzesResult.styles.scss';

const QuizzesResult: FC<QuizzesResultProps> = ({ currentGameResult }) => {
  return !currentGameResult ? null : (
    <section className="result">
      <h2 className="result__scores">
        <span>Correct answers:</span> {currentGameResult.scores}
      </h2>
      <p className="result__time">
        <span>Time:</span> {currentGameResult.time}
      </p>
      <p className="result__category">
        <span>Category:</span> {currentGameResult.category}
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
  );
};

export default QuizzesResult;
