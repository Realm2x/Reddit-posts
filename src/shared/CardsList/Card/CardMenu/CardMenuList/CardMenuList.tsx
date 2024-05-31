import React, { useRef } from 'react';
import styles from './cardmenulist.css';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { ButtonClose } from '../ButtonClose';
import { Text } from '../../../../Text';
import { ComplainIcon, SaveIcon, HiddenIcon, CommentIcon, LinkMenuIcon } from '../../../../assets';
import { Icon } from '../../../../Icon';
import { Break } from '../../../../Break';
import { GenericList } from '../../../../GenericList/GenericList';

const LIST = [
  {
    text: <Text mobileSize={12} size={14}>Комментарии</Text>,
    className: `${styles.menuCardItem} ${styles.hiddenItem}`,
    other: <Break size={6} />,
    icon: <Icon icon={<CommentIcon />} mobileSize={12} size={14} />,
  },
  {
    text: <Text mobileSize={12} size={14}>Поделиться</Text>,
    className: `${styles.menuCardItem} ${styles.hiddenItem}`,
    other: <Break size={6} />,
    icon: <Icon icon={<LinkMenuIcon />} mobileSize={12} size={14} />,
  },
  {
    text: <Text mobileSize={12} size={14}>Скрыть</Text>,
    className: `${styles.menuCardItem}`,
    other: <Break  size={6}/>,
    icon: <Icon icon={<HiddenIcon />} mobileSize={12} size={14} />,
  },
  {
    text: <Text mobileSize={12} size={14}>Сохранить</Text>,
    className: `${styles.menuCardItem} ${styles.hiddenItem}`,
    other: <Break size={6} />,
    icon: <Icon icon={<SaveIcon />} mobileSize={12} size={14} />,
  },
  {
    text: <Text mobileSize={12} size={14}>Пожаловаться</Text>,
    className: `${styles.menuCardItem}`,
    other: <Break size={6} />,
    icon: <Icon icon={<ComplainIcon />} mobileSize={12} size={14} />,
  },
].map(generateId)

export function CardMenuList() {
  return(
    <ul className={styles.menuCardList}>
      <GenericList list={LIST}/>
      <ButtonClose />
    </ul>
  );
}
