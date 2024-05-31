import React from 'react';
import styles from './useravatar.css';
import { IconAnon } from '../../../../assets/IconAnon';

interface IUserAvatar {
  avatar?: string;
  author?: string;
  datePostUtc?: number;
}

export function UserAvatar({avatar, author , datePostUtc}: IUserAvatar) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        {avatar
          ? <img className={styles.avatar} src={avatar} alt='avatar'/>
          : <IconAnon width='20' height='20' />
        }
        
        <a href="#user-url" className={styles.username}>{author || 'Аноним'}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {datePostUtc} часа назад</span>
    </div>
  );
}
