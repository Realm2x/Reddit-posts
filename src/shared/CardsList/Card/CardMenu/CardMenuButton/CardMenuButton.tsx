import React from 'react';
import styles from './cardmenubutton.css';
import { MenuIcon } from '../../../../assets/MenuIcon';

export function CardMenuButton() {
  return (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );
}
