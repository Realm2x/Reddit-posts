import React from 'react';
import styles from './upbutton.css';
import { ArrowUp } from '../../assets';

export function UpButton() {
  return (
    <button className={styles.upButton}>
      <ArrowUp />
    </button>
  );
}
