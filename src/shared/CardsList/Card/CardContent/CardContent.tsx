import React from 'react';
import styles from './cardcontent.css';
import { UserAvatar } from './UserAvatar';
import { PostTitle } from './PostTitle';

interface ICardContent {
  avatar?: string;
  author?: string;
  datePostUtc?: number;
  title?: string;
  subreddit?: string;
  postId?: string;
}

export function CardContent({avatar, author, datePostUtc, title, subreddit, postId}: ICardContent) {
  return (
    <div className={styles.textContent}>
      <UserAvatar avatar={avatar} author={author} datePostUtc={datePostUtc}/>
      <PostTitle title={title} subreddit={subreddit} postId={postId} />
    </div>
  );
}
