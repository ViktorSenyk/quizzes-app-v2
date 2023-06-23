import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { QuizzesGameProps, ResultData } from '../../types';

import './quizzesGame.styles.scss';

const QuizzesGame: FC<QuizzesGameProps> = ({
  selectedQuizzesData,
  setCurrentGameResult,
  setStatisticData,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentGameDuration, setCurrentGameDuration] = useState<string>('00:00');
  const [currentGameScores, setCurrentGameScores] = useState<boolean[]>([]);

  const navigator = useNavigate();
  const startTime = moment();

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentTime = moment();
      const duration = moment.duration(currentTime.diff(startTime));
      const formattedTime = moment.utc(duration.asMilliseconds()).format('mm:ss');
      setCurrentGameDuration(formattedTime);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quizzHandle = (selectedOption: string): void => {
    if (!selectedQuizzesData) return;
    const { correct_answer } = selectedQuizzesData[currentQuestionIndex];
    const newValues: boolean[] = [...currentGameScores, correct_answer === selectedOption];
    setCurrentGameScores(newValues);
    if (currentQuestionIndex < selectedQuizzesData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const result: ResultData = {
        id: Math.random(),
        category: selectedQuizzesData[0].category,
        time: currentGameDuration,
        scores: `${newValues.filter(score => score === true).length}/${newValues.length}`,
      };
      setCurrentGameResult(result);
      setStatisticData(result);
      navigator('/result');
    }
  };

  const textDecoder = (): string => {
    if (!selectedQuizzesData) return '';
    const encodedText: string = selectedQuizzesData[currentQuestionIndex].question;
    const decodedText: HTMLTextAreaElement = document.createElement('textarea');
    decodedText.innerHTML = encodedText;
    const fixedText: string = decodedText.value;
    return fixedText;
  };

  return (
    selectedQuizzesData && (
      <section className="quizz-game">
        <h2 className="quizz-game__category">
          Category: <span>{selectedQuizzesData[0].category}</span>
        </h2>
        <p className="quizz-game__extra-info">
          №: <span>{`${currentQuestionIndex + 1}/10`}</span>
        </p>
        <p className="quizz-game__extra-info">
          Time: <span>{currentGameDuration}</span>
        </p>
        <h6 className="quizz-game__question">{textDecoder()}</h6>
        <div className="quizz-game__btn-wrapper">
          <button
            className="quizz-game__btn quizz-game__btn_true"
            onClick={() => quizzHandle('True')}
          ></button>
          <button
            className="quizz-game__btn quizz-game__btn_false"
            onClick={() => quizzHandle('False')}
          ></button>
        </div>
      </section>
    )
  );
};

export default QuizzesGame;
