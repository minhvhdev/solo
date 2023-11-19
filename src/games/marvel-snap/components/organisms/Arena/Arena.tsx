import { useSelector } from 'react-redux';

import { Location } from '@ms/components/molecules';
import { PlayPlace } from '@ms/components/organisms';
import { selectGamePlay } from '@ms/redux/selectors/gamePlaySelector';
import styles from './Arena.css';

const Arena = () => {
  const { commonInfo, yourInfo, opponentInfo } = useSelector(selectGamePlay);

  return (
    <div className={styles.arenaTwc}>
      {commonInfo.locations.map((location, index) => (
        <div key={location.id} className={styles.locationPlayTwc}>
          <div className={styles.playPlaceTwc}>
            <PlayPlace
              locationIndex={index}
              cards={opponentInfo.playedCards[index]}
              isOpponent
            />
          </div>
          <div className={styles.locationTwc}>
            <Location
              key={location.id}
              name={location.name}
              yourPower={location.yourPower}
              opponentPower={location.opponentPower}
            />
          </div>
          <div className={styles.playPlaceTwc}>
            <PlayPlace
              locationIndex={index}
              cards={yourInfo.playedCards[index]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Arena;
