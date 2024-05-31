import React from 'react';
import styles from './posttitle.css';
import { Link } from 'react-router-dom';

interface IPostTitle {
  title?: string;
  subreddit?: string;
  postId?: string;
}

export function PostTitle({title, subreddit, postId}: IPostTitle) {
  

  return (
    <h2 className={styles.title}>
      <Link to={{pathname: `/posts/${postId}`, state: {subreddit, postId}}} className={styles.postLink} >
        {title}
      </Link>
    </h2>
  );
}
