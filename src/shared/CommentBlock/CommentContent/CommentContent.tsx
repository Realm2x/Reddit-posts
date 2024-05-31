import React from 'react';
import styles from './commentcontent.css';

interface ICommentBlock {
  body?: string;
}

export function CommentContent({body}: ICommentBlock) {
  return (
    <p className={styles.commentContent}>
      {body}
    </p>
  );
}
