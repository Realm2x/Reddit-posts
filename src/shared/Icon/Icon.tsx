import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { EColors } from '../Text';

type TSizes = 12 | 14 | 16 | 18 | 20;

interface IIcon {
  As?: 'span';
  icon: React.ReactNode;
  size: TSizes;
  fill?: EColors;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Icon(props: IIcon) {
  const {
    As = 'span',
    icon,
    size,
    fill = EColors.greyC4,
    mobileSize,
    tabletSize,
    desktopSize
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[fill],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );

  return (
    <As className={classes}>
      {icon}
    </As>
  );
}