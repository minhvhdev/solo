import { HTMLAttributes } from 'react';

import { ReactChild } from '@common/types';
import styles from './PowerDisplay.css';

type PowerDisplayProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactChild;
  isWin: boolean;
};

const PowerDisplay = (props: PowerDisplayProps) => {
  const { children, isWin, className } = props;

  return (
    <div className={`${styles.containerTwc} ${styles.shape} ${className}`}>
      <span
        className={`${styles.spanTwc}  ${
          isWin ? styles.bgWinTwc : styles.bgLoseTwc
        } ${styles.shape}`}
      >
        <span className={styles.textTwc}>{children}</span>
      </span>
    </div>
  );
};

export default PowerDisplay;
