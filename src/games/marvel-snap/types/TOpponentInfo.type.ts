import TCard from './TCard.type';

type TOpponentInfo = {
  heal: number;
  playedCards: [TCard[], TCard[], TCard[]];
  snapped: boolean;
  isPlaying: boolean;
  destroyedCards: TCard[];
  discardedCards: TCard[];
};

export default TOpponentInfo;
