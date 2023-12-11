import { ButtonHTMLAttributes } from 'react';

import { TReactChild } from '@common/types';
import styles from './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'center' | 'right';
  color?: 'normal' | 'danger';
  className?: string;
  children: TReactChild;
};

const Button = (props: ButtonProps) => {
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
      className={`${styles.button} ${styles.position[position]}`}
      {...argument}
    >
      <span
        className={`${styles.span} ${styles.size[size]} ${styles.type[color]} ${styles.position[position]} ${className}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
