import { HTMLAttributes } from 'react';

import { TReactChild } from '@common/types';
import styles from './PowerDisplay.css';

type PowerDisplayProps = HTMLAttributes<HTMLDivElement> & {
  children: TReactChild;
  isWin: boolean;
};

const PowerDisplay = (props: PowerDisplayProps) => {
  const { children, isWin, className } = props;

  return (
    <div className={`${styles.container} ${styles.shape} ${className}`}>
      <span
        className={`${styles.span}  ${isWin ? styles.bgWin : styles.bgLose} ${
          styles.shape
        }`}
      >
        {children}
      </span>
    </div>
  );
};

export default PowerDisplay;
