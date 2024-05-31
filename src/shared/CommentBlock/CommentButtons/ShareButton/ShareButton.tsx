import React from 'react';
import styles from './sharebutton.css';
import { LinkMenuIcon } from '../../../assets';

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <span className={styles.shareButtonSvg}>
        <LinkMenuIcon />
      </span>
      Поделиться
    </button>
  );
}
