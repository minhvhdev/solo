import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Button, PlayingCard } from '@common/components/atoms';
import { RowCards } from '@common/components/molecules';
import { PLAYING_CARDS } from '@common/constants';
import { shuffle } from '@common/helpers';
import { TPlayingCard } from '@common/types';
import { BJ_MAX_SCORE } from '@bj/constants';
import { EBJPlayingStatus } from '@bj/enums';
import {
  bjCalculateScore,
  bjCheckWin,
  bjDealCards,
  bjHitCards,
} from '@bj/helpers';

type SinglePlayPageProps = {};

const SinglePlayPage = (props: SinglePlayPageProps) => {
  const [cards, setCards] = useState<TPlayingCard[]>(shuffle(PLAYING_CARDS));
  const [dealerCards, setDealerCards] = useState<TPlayingCard[]>([]);
  const [playerCards, setPlayerCards] = useState<TPlayingCard[]>([]);
  const [status, setStatus] = useState<EBJPlayingStatus>(EBJPlayingStatus.IDLE);

  const currentPlayerScore = useMemo(
    () => bjCalculateScore(playerCards),
    [playerCards],
  );
  const currentDealerScore = useMemo(
    () => bjCalculateScore(dealerCards),
    [dealerCards],
  );

  const isDisabledHitCard = useMemo(
    () =>
      playerCards.length >= 5 ||
      currentPlayerScore.filter((card) => card >= BJ_MAX_SCORE).length > 0,
    [currentPlayerScore, playerCards.length],
  );

  const handleHit = useCallback(
    (
      playerCards: TPlayingCard[],
      setPlayerCards: Dispatch<SetStateAction<TPlayingCard[]>>,
    ) => {
      const cloneCards = [...cards];
      const clonePlayerCards = [...playerCards];
      setPlayerCards(bjHitCards(cloneCards, clonePlayerCards));
      setCards(cloneCards);
    },
    [cards],
  );

  const handleStand = () => {
    setStatus(EBJPlayingStatus.STANDING);
  };

  useEffect(() => {
    const { currentCards, dealtCards } = bjDealCards(cards, 2);
    setCards(currentCards);
    setDealerCards(dealtCards[0]);
    setPlayerCards(dealtCards[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('a');
    if (status !== EBJPlayingStatus.STANDING) return;
    if (dealerCards.length < 5 && currentDealerScore[0] < BJ_MAX_SCORE) {
      handleHit(dealerCards, setDealerCards);
      return;
    }
    setStatus(bjCheckWin(currentDealerScore[0], currentPlayerScore[0]));
  }, [currentDealerScore, currentPlayerScore, dealerCards, handleHit, status]);

  useEffect(() => {
    if (status === EBJPlayingStatus.WIN) window.alert('You win!');
    if (status === EBJPlayingStatus.LOSE) window.alert('You lose!');
    if (status === EBJPlayingStatus.DRAW) window.alert('Draw!');
  }, [status]);

  return (
    <div className="flex flex-col justify-center">
      <div className="">
        <RowCards
          cards={dealerCards}
          review={
            ![EBJPlayingStatus.IDLE, EBJPlayingStatus.STANDING].includes(status)
          }
          showCards={[0]}
          isRotate
        />
      </div>
      <div className="my-10 flex justify-center">
        <Button
          disabled={isDisabledHitCard}
          onClick={() => handleHit(playerCards, setPlayerCards)}
        >
          Hit
        </Button>
        <Button onClick={handleStand}>Stand</Button>
      </div>
      <div className="">
        <RowCards cards={playerCards} review={true} />
        <div>
          {currentPlayerScore.map((score) => (
            <div key={score}>{score}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePlayPage;
