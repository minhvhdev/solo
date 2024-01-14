import { useEffect, useMemo, useRef } from 'react';

import { PlayingCard } from '@common/components/atoms';
import { DISPLAY_RATIO_CARD } from '@common/constants';
import { TPlayingCard } from '@common/types';
import styles from './RowCards.css';

type RowCardsProps = {
  cards: TPlayingCard[];
  isPlaying: boolean;
  showCards?: number[];
};

const RowCards = (props: RowCardsProps) => {
  const { cards, isPlaying, showCards } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRotateCard = (index: number) => {
    const length = cards.length;
    const DEG = 10;
    const mid = Math.floor(length / 2);

    let z = 0;
    if (length % 2 !== 0) {
      z = (index - mid) * DEG;
    } else {
      z = (index - mid) * DEG + DEG / 2;
    }
    const y = Math.abs(z) * (Math.abs(index - mid) - 1) * 1.4;
    const x = z * ((0.6 * DEG) / Math.abs(index - mid));
    // const x = 0 ;

    return {
      transform: `rotateZ(${z}deg) translateY(${y}px) translateX(${-x}px)`,
      transformOrigin: index < mid ? 'top right' : 'top left',
      // transformOrigin: 'center',
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const height = containerRef.current.clientHeight;
    console.log(height, DISPLAY_RATIO_CARD, height / DISPLAY_RATIO_CARD);
    const width = (height / DISPLAY_RATIO_CARD) * cards.length;
    containerRef.current.style.width = `${width}px`;
  });

  return (
    <div className={styles.container}>
      <div className={styles.rowCards} ref={containerRef}>
        {cards.map((card, index) => (
          <div
            key={card.name}
            className={styles.card}
            style={handleRotateCard(index)}
          >
            <PlayingCard
              name={card.name}
              review={isPlaying || showCards?.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowCards;
