import React from 'react';
import styles from './downbutton.css';
import { ArrowDown } from '../../assets';

export function DownButton() {
  return (
    <button className={styles.downButton}>
      <ArrowDown />
    </button>
  );
}
