import React from 'react';
import styles from './card.css';
import { CardContent } from './CardContent';
import { CardMenu } from './CardMenu';
import { CardContols } from './CardControls';
import { CardPreview } from './CardPreview';

interface Props {
  author?: string;
  title?: string;
  rating?: number;
  avatar?: string;
  subreddit?: string;
  postId?: string;
  previewImg?: string;
  datePostUtc?: number;
}

export function Card({ title, author, rating, avatar, subreddit, previewImg, datePostUtc, postId }: Props) {

  return(
    <li className={styles.card}>
      <CardContent avatar={avatar} author={author} datePostUtc={datePostUtc} title={title} subreddit={subreddit} postId={postId} />

      <CardPreview previewImg={previewImg} />

      <CardMenu />

      <CardContols rating={rating} />
    </li>
  )
}
