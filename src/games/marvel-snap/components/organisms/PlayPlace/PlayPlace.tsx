import { DragEventHandler } from 'react';

import { useDispatch } from 'react-redux';

import { defaultDragOver, getDragData } from '@common/helpers';
import { Card } from '@ms/components/molecules';
import { playCardAction } from '@ms/redux/slices/gamePlaySlice';
import { TCard } from '@ms/types';
import styles from './PlayPlace.css';

type PlayPlaceProps = {
  cards: TCard[];
  locationIndex: number;
  isOpponent?: boolean;
};

const PlayPlace = (props: PlayPlaceProps) => {
  const { isOpponent, cards, locationIndex } = props;
  const dispatch = useDispatch();

  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    const id: string = getDragData(e);
    dispatch(playCardAction({ id, locationIndex }));
  };

  return (
    <div
      className={`${styles.playPlace} ${
        isOpponent ? styles.reverseOrder : styles.normalOrder
      }`}
      onDrop={handleDrop}
      onDragOver={defaultDragOver}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`${styles.cards} [grid-area:item${index}] ${
            (index % 2 === 0 && !isOpponent) || (index % 2 !== 0 && isOpponent)
              ? 'justify-end'
              : ''
          } `}
        >
          <Card cardInfo={card} />
        </div>
      ))}
    </div>
  );
};

export default PlayPlace;
