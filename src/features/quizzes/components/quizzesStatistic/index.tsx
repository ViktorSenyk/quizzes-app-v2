import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { QuizzesStatisticProps, ResultData } from '../../../../types';

import './quizzesStatistic.styles.scss';

const QuizzesStatistic: FC<QuizzesStatisticProps> = ({ statisticData }) => {
  return (
    <section className="statistic">
      <h2 className="statistic__title">Statistic</h2>
      {!statisticData ? (
        <p className="statistic__empty">Empty...</p>
      ) : (
        <ul className="statistic__list">
          <li className="statistic__list-item">
            <p>#</p>
            <p>CATEGORY</p>
            <p>TIME</p>
            <p>SCORES</p>
          </li>
          {statisticData.map(({ id, category, time, scores }: ResultData, index: number) => (
            <li className="statistic__list-item" key={id}>
              <p>{index + 1}</p>
              <p>{category}</p>
              <p>{time}</p>
              <p>{scores}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" className="statistic__btn">
        Back to List
      </Link>
    </section>
  );
};

export default QuizzesStatistic;
