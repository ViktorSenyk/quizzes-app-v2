import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { QuizzesListProps, QuizDataForList } from '../../types';

import './quizzesList.styles.scss';

const QuizzesList: FC<QuizzesListProps> = ({ quizzesList, fetchSelectedQuizzesData }) => {
  return (
    <section className="quizzes">
      <Link
        to="/game"
        className="quizzes__lucky-btn"
        onClick={() => fetchSelectedQuizzesData(quizzesList[Math.floor(Math.random() * 9)].url)}
      >
        I'm lucky!
      </Link>
      <ul className="quizzes__list">
        {quizzesList.map(({ id, title, img, url }: QuizDataForList) => (
          <li
            key={id}
            className="quizzes__item quizz-card"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/quizzesList/${img})`,
            }}
          >
            <h6 className="quizz-card__title">{title}</h6>
            <Link
              to="/game"
              className="quizz-card__start-btn"
              onClick={() => fetchSelectedQuizzesData(url)}
            >
              Start game ?
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuizzesList;
