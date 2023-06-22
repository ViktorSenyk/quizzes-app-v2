import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './quizzesStatistic.styles.scss';

interface Statistic {
  id: number;
  category: string;
  time: string;
  scores: string;
}

interface QuizzesStatisticProps {
  statisticData: Statistic[];
}

const QuizzesStatistic: FC<QuizzesStatisticProps> = ({ statisticData }) => {
  return (
    <section className="statistic">
      <h2 className="statistic__title">Statistic</h2>
      {statisticData.length === 0 ? (
        <p className="statistic__empty">Empty...</p>
      ) : (
        <ul className="statistic__list">
          <li className="statistic__list-item">
            <p>#</p>
            <p>CATEGORY</p>
            <p>TIME</p>
            <p>SCORES</p>
          </li>
          {statisticData.map(({ id, category, time, scores }, index: number) => (
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
