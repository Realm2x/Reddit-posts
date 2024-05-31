import React from 'react';
import styles from './answerbutton.css';
import { CommentIcon } from '../../../assets';

interface IAnswerButton {
  onClick?: () => void;
}

export function AnswerButton({onClick}: IAnswerButton) {
  return (
    <button className={styles.answerButton} onClick={onClick}>
      <span className={styles.answerButtonSvg}>
        <CommentIcon />
      </span>
      Ответить
    </button>
  );
}
