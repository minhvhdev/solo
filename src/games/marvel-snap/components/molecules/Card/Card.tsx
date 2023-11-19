import { HTMLAttributes, useMemo } from 'react';

import { PowerDisplay } from '@ms/components/atoms';
import { WithBackdropDetailProps, withBackdropDetail } from '@ms/HOCs';
import { TCard } from '@ms/types';
import styles from './Card.css';

type CardProps = WithBackdropDetailProps &
  HTMLAttributes<HTMLDivElement> & {
    cardInfo: TCard;
    className?: string;
  };

const Card = withBackdropDetail((props: CardProps) => {
  const {
    cardInfo,
    className = '',
    isShowDetail,
    showBackdrop,
    ...args
  } = props;

  const imgLink = useMemo(() => {
    return `url('/assets/images/marvel-snap/cards/${cardInfo.name}.webp`;
  }, [cardInfo.name]);

  return (
    <div
      className={`${styles.cardTwc} ${className}`}
      style={{
        backgroundImage: imgLink,
      }}
      onClick={showBackdrop}
      onKeyDown={showBackdrop}
      {...args}
    >
      {!isShowDetail && (
        <PowerDisplay isWin={false} className={styles.currentPowerTwc}>
          {cardInfo.currentPower}
        </PowerDisplay>
      )}
    </div>
  );
});

export default Card;
