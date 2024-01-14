import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

import { rippleEffect } from '@common/helpers';
import { TReactChild } from '@common/types';
import styles from './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';
};

const Button = (props: ButtonProps) => {
  const { children, color, ...args } = props;

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    rippleEffect(event);
  };

  let buttonClasses;

  // switch (color) {
  //   case 'outlined':
  //     buttonClasses =
  //       'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';
  //     break;
  //   case 'text':
  //     buttonClasses = 'text-blue-500 hover:text-blue-700';
  //     break;
  //   default:
  //     buttonClasses = 'bg-blue-500 hover:bg-blue-700 text-white';
  // }
  return (
    <button
      disabled
      className={`${styles.button} buttonClasses`}
      type="button"
      onClick={handleOnClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
