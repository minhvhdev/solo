import { DragEventHandler } from 'react';

import { CardMS } from '@ms/components/molecules';
import { TCard } from '@ms/types';
import styles from './PlayPlace.css';

type PlayPlaceProps = {
  cards: TCard[];
  isOpponent?: boolean;
};

const PlayPlace = (props: PlayPlaceProps) => {
  const { isOpponent, cards } = props;
  const handleDragStart: DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData('text/html', '');
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData('text/html', '');
  };

  return (
    <div
      className={`${styles.playPlaceTwc} ${
        isOpponent ? styles.reverseOrderTwc : styles.normalOrderTwc
      }`}
      onDragOver={handleDragOver}
    >
      {cards.map((card, index) => (
        <div
          key={card.name}
          className={`${styles.cardsTwc} [grid-area:item${index}] ${
            (index % 2 === 0 && !isOpponent) || (index % 2 !== 0 && isOpponent)
              ? 'justify-end'
              : ''
          } `}
        >
          <CardMS cardInfo={card} draggable onDragStart={handleDragStart} />
        </div>
      ))}
    </div>
  );
};

export default PlayPlace;
