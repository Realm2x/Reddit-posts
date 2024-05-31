import React from 'react';
import styles from './cardmenu.css';
import { CardMenuButton } from './CardMenuButton';
import { CardMenuList } from './CardMenuList';
import { Dropdown } from '../../../Dropdown';

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<CardMenuButton />}>
         <CardMenuList />
      </Dropdown>
    </div>
  );
}
