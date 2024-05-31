import React from 'react';
import styles from './commentuser.css';
import { IconAnon } from '../../assets';
import { Break } from '../../Break';

interface ICommentUser {
  author?: string;
  created?: number;
}

export function CommentUser({author, created}: ICommentUser) {
  return (
    <div className={styles.commentUserBlock}>
      <div className={styles.commentUserInfo}>
        <IconAnon width='20' height='20' />
        <Break size={6} />
        <a href="#comments-url" className={styles.commentAuthor}>{author || 'Аноним'}</a>
        <span className={styles.commentDate}>
          {created} часа назад
        </span>
      </div>
    </div>
  );
}
