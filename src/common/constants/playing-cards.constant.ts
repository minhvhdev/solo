import { ECardTypes } from '@common/enums';
import { TPlayingCard } from '@common/types';

export const PLAYING_CARDS: TPlayingCard[] = [
  {
    name: 'spades_1',
    value: 1,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_2',
    value: 2,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_3',
    value: 3,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_4',
    value: 4,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_5',
    value: 5,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_6',
    value: 6,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_7',
    value: 7,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_8',
    value: 8,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_9',
    value: 9,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_10',
    value: 10,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_11',
    value: 11,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_12',
    value: 12,
    type: ECardTypes.SPADE,
  },
  {
    name: 'spades_13',
    value: 13,
    type: ECardTypes.SPADE,
  },
  {
    name: 'clubs_1',
    value: 1,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_2',
    value: 2,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_3',
    value: 3,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_4',
    value: 4,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_5',
    value: 5,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_6',
    value: 6,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_7',
    value: 7,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_8',
    value: 8,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_9',
    value: 9,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_10',
    value: 10,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_11',
    value: 11,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_12',
    value: 12,
    type: ECardTypes.CLUB,
  },
  {
    name: 'clubs_13',
    value: 13,
    type: ECardTypes.CLUB,
  },
  {
    name: 'diamonds_1',
    value: 1,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_2',
    value: 2,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_3',
    value: 3,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_4',
    value: 4,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_5',
    value: 5,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_6',
    value: 6,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_7',
    value: 7,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_8',
    value: 8,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_9',
    value: 9,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_10',
    value: 10,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_11',
    value: 11,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_12',
    value: 12,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'diamonds_13',
    value: 13,
    type: ECardTypes.DIAMOND,
  },
  {
    name: 'hearts_1',
    value: 1,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_2',
    value: 2,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_3',
    value: 3,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_4',
    value: 4,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_5',
    value: 5,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_6',
    value: 6,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_7',
    value: 7,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_8',
    value: 8,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_9',
    value: 9,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_10',
    value: 10,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_11',
    value: 11,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_12',
    value: 12,
    type: ECardTypes.HEART,
  },
  {
    name: 'hearts_13',
    value: 13,
    type: ECardTypes.HEART,
  },
];

export const PLAYING_CARDS_FULL: TPlayingCard[] = [
  ...PLAYING_CARDS,
  { name: 'joker_black', value: 14, type: ECardTypes.JOKER_BLACK },
  { name: 'joker_red', value: 15, type: ECardTypes.JOKER_RED },
];

export const DISPLAY_RATIO_CARD = 333 / 234; //height / width
