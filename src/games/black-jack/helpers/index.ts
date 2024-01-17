import { ECardValue } from '@common/enums';
import { combineWithoutOrder, shuffle } from '@common/helpers';
import { TPlayingCard } from '@common/types';

import { BJ_ACE_SCORE, BJ_MAX_SCORE, BJ_NUM_START_CARDS } from '../constants';
import { EBJPlayingStatus } from '../enums';

export const bjDealCards = (
  cards: TPlayingCard[],
  numPlayer: number,
): { dealtCards: TPlayingCard[][]; currentCards: TPlayingCard[] } => {
  const dealtCards = [];
  const currentCards = shuffle(cards);

  for (let i = 0; i < numPlayer; i++) {
    const playerCards = [];
    for (let j = 0; j < BJ_NUM_START_CARDS; j++) {
      playerCards.push(currentCards[j]);
      currentCards.splice(j, 1);
    }
    dealtCards.push(playerCards);
  }

  return {
    dealtCards,
    currentCards,
  };
};

export const bjHitCards = (
  cards: TPlayingCard[],
  playerCards: TPlayingCard[],
): TPlayingCard[] => {
  const hitCards = cards.splice(0, 1);
  playerCards.push(hitCards[0]);
  return playerCards;
};

export const bjCalculateScore = (playerCards: TPlayingCard[]): number[] => {
  let acesCount = 0;
  let baseScore = 0;

  playerCards.forEach(({ value }) => {
    if (value === ECardValue.ACE) {
      acesCount += 1;
    } else if (value > ECardValue.TEN) {
      baseScore += 10;
    } else {
      baseScore += value;
    }
  });

  if (baseScore === 0) return [BJ_MAX_SCORE];
  if (baseScore > BJ_MAX_SCORE) {
    return acesCount ? [baseScore + BJ_ACE_SCORE.ONE * acesCount] : [baseScore];
  }
  if (!acesCount) {
    return [baseScore];
  }

  const scoreCases: number[] = [];

  const combinations = combineWithoutOrder<number>(
    Object.values(BJ_ACE_SCORE),
    acesCount,
  );
  for (let i = 0; i < combinations.length; i++) {
    const score = baseScore + combinations[i].reduce((a, b) => a + b, 0);
    if (score === BJ_MAX_SCORE) {
      return [score];
    }
    if (score < BJ_MAX_SCORE) {
      scoreCases.push(score);
    }
  }
  return scoreCases;
};

export const bjCheckWinner = (
  dealerCards: TPlayingCard[],
  playerCards: TPlayingCard[],
): EBJPlayingStatus => {
  const dealerScore = bjCalculateScore(dealerCards)[0];
  const playerScore = bjCalculateScore(playerCards)[0];

  if (
    (playerScore < BJ_MAX_SCORE &&
      ((dealerScore < playerScore && dealerScore < BJ_MAX_SCORE) ||
        dealerScore > BJ_MAX_SCORE)) ||
    (playerScore > BJ_MAX_SCORE && dealerScore > playerScore)
  ) {
    return EBJPlayingStatus.WIN;
  }
  if (playerScore === dealerScore) return EBJPlayingStatus.DRAW;

  return EBJPlayingStatus.LOSE;
};
