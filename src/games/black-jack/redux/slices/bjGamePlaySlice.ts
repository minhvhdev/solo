'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { genId, shuffle } from '@common/helpers';
import { EBJGameStatus, EBJPlayingStatus } from '@bj/enums';
import { bjDealCards } from '@bj/helpers';
import { TBJCommonInfo, TBJDealerInfo, TBJYourInfo } from '@bj/types';

type GamePlay = {
  yourInfo: TBJYourInfo;
  dealerInfo: TBJDealerInfo;
  commonInfo: TBJCommonInfo;
};

const initialState: GamePlay = {
  yourInfo: {
    playing: {
      cards: [],
      status: EBJPlayingStatus.IDLE,
      bet: 0,
      hittingCountTime: 0,
      showCards: [],
    },
    user: {
      name: '',
      isDealer: false,
      money: 0,
    },
  },
  commonInfo: {
    playing: {
      reviewed: [],
      cards: [],
    },
    game: {
      status: EBJGameStatus.STARTING,
      round: 0,
    },
  },
  dealerInfo: {
    playing: {
      showCards: [],
      status: EBJPlayingStatus.IDLE,
    },
  },
};

const bjGamePlayReducer = createSlice({
  name: 'game-play',
  initialState,
  reducers: {
    bjActStartGameAction: (
      { yourInfo, commonInfo },
      { payload }: PayloadAction<TPlayingCard[]>,
    ) => {
      // bjDealCards(payload);
      // yourInfo.deckCards = shuffledDeckCards;
      // yourInfo.handCards = firstRoundPlayingCards;
      // commonInfo.locations = locations;
    },
  },
});

export const { bjActStartGameAction } = bjGamePlayReducer.actions;
export default bjGamePlayReducer.reducer;
