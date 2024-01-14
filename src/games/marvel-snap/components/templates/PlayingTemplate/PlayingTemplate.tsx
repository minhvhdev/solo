import { Avatar, ButtonMS } from '@ms/components/atoms';
import { Arena, HandCards } from '@ms/components/organisms';
import styles from './PlayingTemplate.css';

const PlayingTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Avatar imgUrl={''} playerName={''} />
        <ButtonMS color="danger" position="left">
          Retreat
        </ButtonMS>
      </div>
      <div className={styles.center}>
        <div className={styles.arena}>
          <Arena />
        </div>
        <div className={styles.yourHand}>
          <HandCards />
        </div>
      </div>
      <div className={styles.right}>
        <Avatar imgUrl={''} playerName={''} />
        <ButtonMS position="right">{'Waiting\n3/6'}</ButtonMS>
      </div>
    </div>
  );
};

export default PlayingTemplate;
