'use client';
import { DragEventHandler, useMemo } from 'react';

import { useSelector } from 'react-redux';

import { getDomData, setDragData } from '@common/helpers';
import { Card } from '@ms/components/molecules';
import { selectGamePlay } from '@ms/redux/selectors/gamePlaySelector';
import styles from './HandCards.css';

const HandCards = () => {
  const {
    yourInfo: { handCards },
  } = useSelector(selectGamePlay);

  const handCardSizeRatio = useMemo(() => {
    const numCards = handCards.length;
    if (numCards < 6) {
      return 38;
    } else if (numCards === 6) {
      return 46.2;
    } else {
      return 54;
    }
  }, [handCards.length]);

  const handleDrag: DragEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.display = 'none';
  };

  const handleDragStart: DragEventHandler<HTMLDivElement> = (e) => {
    const id = getDomData(e, 'id');
    setDragData(e, id);
  };

  const handleDragEnd: DragEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.display = 'block';
  };

  return (
    <div className={`${styles.handCardsTwc} aspect-[${handCardSizeRatio}/10]`}>
      {handCards.map((card) => (
        <Card
          data-id={card.id}
          key={card.id}
          className={styles.cardTwc}
          cardInfo={card}
          draggable
          onDrag={handleDrag}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};

export default HandCards;
