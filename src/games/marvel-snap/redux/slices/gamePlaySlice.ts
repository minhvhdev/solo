'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { genId, shuffleArray } from '@common/helpers';
import { DATA_LOCATIONS } from '@ms/data';
import { ECardStatus } from '@ms/enums';
import {
  TCard,
  TCommonInfo,
  TLocation,
  TOpponentInfo,
  TYourInfo,
} from '@ms/types';

type GamePlay = {
  yourInfo: TYourInfo;
  opponentInfo: TOpponentInfo;
  commonInfo: TCommonInfo;
};
type PlayCardPayload = { id: string; locationIndex: number };

const initialState: GamePlay = {
  yourInfo: {
    handCards: [],
    deckCards: [],
    playedCards: [[], [], []],
    energy: 0,
    heal: 0,
    snapped: false,
    isPlaying: false,
    destroyedCards: [],
    discardedCards: [],
  },
  opponentInfo: {
    heal: 0,
    playedCards: [[], [], []],
    snapped: false,
    isPlaying: false,
    destroyedCards: [],
    discardedCards: [],
  },
  commonInfo: {
    currentRound: 0,
    snapTimes: 0,
    locations: [],
  },
};

const gamePlaySlice = createSlice({
  name: 'game-play',
  initialState,
  reducers: {
    startGameAction: (
      { yourInfo, commonInfo },
      { payload }: PayloadAction<TCard[]>,
    ) => {
      const shuffledDeckCards: TCard[] = shuffleArray(
        payload.map((card) => ({
          ...card,
          id: genId(),
        })),
      );
      const locations: TLocation[] = shuffleArray(DATA_LOCATIONS)
        .slice(0, 3)
        .map((location) => ({
          ...location,
          yourPower: 0,
          opponentPower: 0,
          id: genId(),
        }));
      const firstRoundPlayingCards = shuffledDeckCards
        .splice(0, 4)
        .map((card) => ({ ...card, status: ECardStatus.ON_HAND }));
      yourInfo.deckCards = shuffledDeckCards;
      yourInfo.handCards = firstRoundPlayingCards;
      commonInfo.locations = locations;
    },
    playCardAction: ({ yourInfo }, action: PayloadAction<PlayCardPayload>) => {
      const { id, locationIndex } = action.payload;
      const playingCard = yourInfo.handCards.find((card) => card.id === id);
      if (!playingCard) return;

      playingCard.status = ECardStatus.ON_HAND;
      yourInfo.playedCards[locationIndex].push(playingCard as TCard);
      yourInfo.handCards = yourInfo.handCards.filter((card) => card.id !== id);
    },
  },
});

export const { startGameAction, playCardAction } = gamePlaySlice.actions;
export default gamePlaySlice.reducer;
