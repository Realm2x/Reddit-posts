import React from 'react';
import styles from './commentbuttons.css';
import { ComplainButton } from './ComplainButton';
import { ShareButton } from './ShareButton';
import { AnswerButton } from './AnswerButton';

interface ICommentButtons {
  onClick?: () => void;
}

export function CommentButtons({onClick}: ICommentButtons) {
  return (
    <div className={styles.commentButtonsGroup}>
      <AnswerButton onClick={onClick}/>
      <ShareButton />
      <ComplainButton />
    </div>
  );
}
