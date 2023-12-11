import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

import { TReactChild } from '@common/types';
import styles from './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = (props: ButtonProps) => {
  const { children, variant, ...args } = props;

  const rippleEffect: MouseEventHandler<HTMLElement> = (event) => {
    const className = 'ripple-effect';
    const parentElement = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(
      parentElement.clientWidth,
      parentElement.clientHeight,
    );
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - (parentElement.offsetLeft + radius)
    }px`;
    circle.style.top = `${
      event.clientY - (parentElement.offsetTop + radius)
    }px`;
    circle.classList.add(className);

    const ripple = parentElement.getElementsByClassName(className)[0];

    if (ripple) {
      ripple.remove();
    }

    parentElement.appendChild(circle);
  };

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    rippleEffect(event);
  };

  let buttonClasses;

  switch (variant) {
    case 'outlined':
      buttonClasses =
        'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';
      break;
    case 'text':
      buttonClasses = 'text-blue-500 hover:text-blue-700';
      break;
    default:
      buttonClasses = 'bg-blue-500 hover:bg-blue-700 text-white';
  }
  return (
    <button className={styles.button} type="button" onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
