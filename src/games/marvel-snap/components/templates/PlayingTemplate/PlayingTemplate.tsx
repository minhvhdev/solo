import { Avatar, ButtonMS } from '@ms/components/atoms';
import { Arena, HandCards } from '@ms/components/organisms';
import { TCommonInfo, TLocation, TOpponentInfo, TYourInfo } from '@ms/types';
import styles from './PlayingTemplate.css';

type PlayingTemplateProps = {
  commonInfo: TCommonInfo;
  locations: TLocation[];
  yourInfo: TYourInfo;
  opponentInfo: TOpponentInfo;
};

const PlayingTemplate = (props: PlayingTemplateProps) => {
  const { commonInfo, locations, yourInfo, opponentInfo } = props;
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
          <Arena
            locations={locations}
            yourInfo={yourInfo}
            opponentInfo={opponentInfo}
          />
        </div>
        <div className={styles.yourHandTwc}>
          <HandCards cards={yourInfo.handCards} />
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
