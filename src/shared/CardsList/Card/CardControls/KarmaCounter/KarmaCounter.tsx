import React from 'react';
import styles from './karmacounter.css';

interface IKarmaCounter {
  rating?: number;
}

export function KarmaCounter({rating}: IKarmaCounter) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
      <span className={styles.karmaValue}>{rating}</span>
      <button className={styles.down}>
        <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
        </svg>
      </button>
    </div>
  );
}
