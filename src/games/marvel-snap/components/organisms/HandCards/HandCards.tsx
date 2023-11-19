import { useMemo } from 'react';

import { CardMS } from '@ms/components/molecules';
import { TCard } from '@ms/types';
import styles from './HandCards.css';

type HandCardsProps = {
  cards: TCard[];
};

const HandCards = (props: HandCardsProps) => {
  const { cards } = props;
  const handCardSizeRatio = useMemo(() => {
    const numCards = cards.length;
    if (numCards < 6) {
      return 38;
    } else if (numCards === 6) {
      return 46.2;
    } else {
      return 54;
    }
  }, [cards.length]);

  return (
    <div className={`${styles.handCardsTwc} aspect-[${handCardSizeRatio}/10]`}>
      {cards.map((card) => (
        <CardMS
          key={card.name}
          className={styles.cardTwc}
          cardInfo={card}
          draggable
        />
      ))}
    </div>
  );
};

export default HandCards;
