import React from 'react';
import styles from './complainbutton.css';
import { ComplainIcon } from '../../../assets';

export function ComplainButton() {
  return (
    <button className={styles.complainButton}>
      <span className={styles.complainButtonSvg}>
        <ComplainIcon />  
      </span>
      Пожаловаться
    </button>
  );
}
