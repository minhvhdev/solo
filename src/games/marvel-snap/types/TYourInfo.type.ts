import TCard from './TCard.type';

type TYourInfo = {
  handCards: TCard[];
  deckCards: TCard[];
  playedCards: [TCard[], TCard[], TCard[]];
  energy: number;
  heal: number;
  snapped: boolean;
  isPlaying: boolean;
  destroyedCards: TCard[];
  discardedCards: TCard[];
};

export default TYourInfo;
