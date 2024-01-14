import Image from 'next/image';

import { ASSET_PLAYING_CARDS } from '@common/constants';
import styles from './PlayingCard.css';

type PlayingCardProps = {
  name: string;
  review?: boolean;
};

const PlayingCard = (props: PlayingCardProps) => {
  const { name, review = true } = props;
  return (
    <div className={styles.playingCard} >
      {review ? (
        <Image
          src={`${ASSET_PLAYING_CARDS}/${name}.svg`}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      ) : (
        <Image
          src={`${ASSET_PLAYING_CARDS}/back_card.svg`}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      )}
    </div>
  );
};

export default PlayingCard;
