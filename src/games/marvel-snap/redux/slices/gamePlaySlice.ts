import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TCard, TCommonInfo, TOpponentInfo, TYourInfo } from '@ms/types';

type GamePlay = {
  yourInfo: TYourInfo;
  opponentInfo: TOpponentInfo;
  commonInfo: TCommonInfo;
};

type PlayCardPayload = { card: TCard; positionIndex: number };

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
  },
};

const gamePlaySlice = createSlice({
  name: 'game-play',
  initialState,
  reducers: {
    playCardAction: (state, action: PayloadAction<PlayCardPayload>) => {
      const { card, positionIndex } = action.payload;
      state.yourInfo.playedCards[positionIndex].push(card);
    },
  },
});

export const { playCardAction } = gamePlaySlice.actions;
export default gamePlaySlice.reducer;
