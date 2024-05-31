import React from 'react';
import styles from './buttonclose.css';
import { EColors, Text } from '../../../../Text';

export function ButtonClose() {
  return (
    <button className={styles.buttonclose}>
      <Text mobileSize={12} size={14} color={EColors.grey66} >
        Закрыть
      </Text>
    </button>
  );
}
