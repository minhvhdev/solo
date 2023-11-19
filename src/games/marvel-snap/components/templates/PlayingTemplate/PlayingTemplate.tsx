import { Avatar, ButtonMS } from '@ms/components/atoms';
import { Arena, HandCards } from '@ms/components/organisms';
import styles from './PlayingTemplate.css';

const PlayingTemplate = () => {
  return (
    <div className={styles.containerTwc}>
      <div className={styles.leftTwc}>
        <Avatar imgUrl={''} playerName={''} />
        <ButtonMS color="danger" position="left">
          Retreat
        </ButtonMS>
      </div>
      <div className={styles.centerTwc}>
        <div className={styles.arenaTwc}>
          <Arena />
        </div>
        <div className={styles.yourHandTwc}>
          <HandCards />
        </div>
      </div>
      <div className={styles.rightTwc}>
        <Avatar imgUrl={''} playerName={''} />
        <ButtonMS position="right">{'Waiting\n3/6'}</ButtonMS>
      </div>
    </div>
  );
};

export default PlayingTemplate;
