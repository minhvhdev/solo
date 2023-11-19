import { Location } from '@ms/components/molecules';
import { PlayPlace } from '@ms/components/organisms';
import { TLocation, TOpponentInfo, TYourInfo } from '@ms/types';
import styles from './Arena.css';

type ArenaProps = {
  locations: TLocation[];
  yourInfo: TYourInfo;
  opponentInfo: TOpponentInfo;
};

const Arena = (props: ArenaProps) => {
  const { locations, yourInfo, opponentInfo } = props;
  return (
    <div className={styles.arenaTwc}>
      {locations.map((location, index) => (
        <div key={location.name} className={styles.locationPlayTwc}>
          <div className={styles.playPlaceTwc}>
            <PlayPlace cards={opponentInfo.playedCards[index]} isOpponent />
          </div>
          <div className={styles.locationTwc}>
            <Location
              key={location.name}
              name={location.name}
              yourPower={location.yourPower}
              opponentPower={location.opponentPower}
            />
          </div>
          <div className={styles.playPlaceTwc}>
            <PlayPlace cards={yourInfo.playedCards[index]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Arena;
