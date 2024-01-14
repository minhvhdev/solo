import { useEffect, useState } from 'react';

import { PlayingCard } from '@common/components/atoms';
import { RowCards } from '@common/components/molecules';
import { PLAYING_CARDS } from '@common/constants';
import { shuffle } from '@common/helpers';
import { TPlayingCard } from '@common/types';
import { bjDealCards, bjHitCards } from 'games/black-jack/helpers';

type SinglePlayPageProps = {};

const SinglePlayPage = (props: SinglePlayPageProps) => {
  const [cards, setCards] = useState<TPlayingCard[]>(shuffle(PLAYING_CARDS));
  const [dealerCards, setDealerCards] = useState<TPlayingCard[]>([]);
  const [playerCards, setPlayerCards] = useState<TPlayingCard[]>([]);

  const handleHitCard = () => {
    setPlayerCards(bjHitCards(cards, playerCards));
    console.log(cards);
  };

  useEffect(() => {
    const { currentCards, dealtCards } = bjDealCards(cards, 2);

    setCards(currentCards);
    setDealerCards(dealtCards[0]);
    setPlayerCards(dealtCards[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <div className="">
        {/* <RowCards cards={dealerCards} isPlaying={false} showCards={[0]} /> */}
      </div>
      <div className="">
        <RowCards cards={playerCards} isPlaying={true} />
      </div>

      <button onClick={handleHitCard}>Hit</button>
    </div>
  );
};

export default SinglePlayPage;
