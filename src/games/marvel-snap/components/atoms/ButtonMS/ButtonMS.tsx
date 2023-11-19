import { ButtonHTMLAttributes } from 'react';

import { ReactChild } from '@common/types';
import styles from './ButtonMS.css';

type ButtonMSProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'center' | 'right';
  color?: 'normal' | 'danger';
  className?: string;
  children: ReactChild;
};

const ButtonMS = (props: ButtonMSProps) => {
  const {
    size = 'md',
    position = 'center',
    color = 'normal',
    className = '',
    children,
    ...argument
  } = props;

  return (
    <button
      type="button"
      className={`${styles.buttonTwc} ${styles.positionTwc[position]}`}
      {...argument}
    >
      <span
        className={`${styles.spanTwc} ${styles.sizeTwc[size]} ${styles.typeTwc[color]} ${styles.positionTwc[position]} ${className}`}
      >
        {children}
      </span>
    </button>
  );
};

export default ButtonMS;
