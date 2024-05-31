import React from 'react';
import styles from './cardpreview.css';

interface ICardPreview {
  previewImg?: string;
}

export function CardPreview({previewImg}: ICardPreview) {
  return (
    <div className={styles.preview}>
      {previewImg 
        ? <img className={styles.previewImg} src={previewImg} /> 
        : <img className={styles.previewImg} src="https://msch9fmba.ru/images/img/plug.jpg" /> 
      }
    </div>
  );
}
