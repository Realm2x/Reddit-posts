import classNames from 'classnames';
import React from 'react';
import styles from './break.css';

type TBreakSize = 4 | 6 | 8 | 10 | 12;
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tableSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean; 
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    tableSize,
    desktopSize,
  } = props;

  return (
    <span
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`mobile_s${tableSize}`]]: tableSize },
        { [styles[`mobile_s${desktopSize}`]]: desktopSize },
        { [styles.inline] : inline },
        { [styles.top]: top }
      )}
    />
  );
}
