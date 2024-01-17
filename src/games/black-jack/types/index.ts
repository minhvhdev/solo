import { TPlayingCard } from '@common/types';

import { EBJGameStatus, EBJPlayingStatus } from '../enums';

type TBJReviewedPlayer = {
  name: string;
  cards: TPlayingCard[];
  status: EBJPlayingStatus;
};

export type TBJPlayerInfo = {
  name: string;
  
}

export type TBJYourInfo = {
  playing: {
    cards: TPlayingCard[];
    status: EBJPlayingStatus;
    bet: number;
    hittingCountTime: number;
    showCards: TPlayingCard[];
  };
  user: {
    name: string;
    isDealer: boolean;
    money: number;
  };
};

export type TBJDealerInfo = {
  playing: {
    showCards: TPlayingCard[];
    status: EBJPlayingStatus;
  };
};

export type TBJCommonInfo = {
  playing: {
    reviewed: TBJReviewedPlayer[];
    cards: TPlayingCard[];
  };
  game: {
    status: EBJGameStatus;
    round: number;
  };
};
