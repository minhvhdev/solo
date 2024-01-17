import { useEffect, useRef } from 'react';

import { PlayingCard } from '@common/components/atoms';
import { DISPLAY_RATIO_CARD } from '@common/constants';
import { TPlayingCard } from '@common/types';
import styles from './RowCards.css';

type RowCardsProps = {
  cards: TPlayingCard[];
  review: boolean;
  showCards?: number[];
  isRotate?: boolean;
};

const RowCards = (props: RowCardsProps) => {
  const { cards, review, showCards, isRotate } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const height = containerRef.current.clientHeight;
    const width = (height / DISPLAY_RATIO_CARD) * cards.length;
    containerRef.current.style.width = `${width}px`;
  }, [cards]);

  return (
    <div className={styles.container}>
      <div
        className={styles.rowCards}
        ref={containerRef}
        style={isRotate ? { transform: 'rotateZ(180deg)' } : {}}
      >
        {cards.map((card, index) => (
          <div
            key={card.name}
            className={styles.card}
            // style={handleRotateCard(index)}
          >
            <PlayingCard
              name={card.name}
              review={review || showCards?.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowCards;
