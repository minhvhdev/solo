import { TBJCard } from '../types';

export const bjDealCards = (cards: TBJCard[], numPlayer: number) => {
  const dealtCards = [];
  const currentCards = [...cards];

  for (let i = 0; i < numPlayer; i++) {
    const playerCards = [];
    for (let j = 0; j < 9; j++) {
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

export const bjHitCards = (cards: TBJCard[], playerCards: TBJCard[]) => {
  const hitCards = cards.splice(0, 1);
  playerCards.push(hitCards[0]);
  return playerCards;
};