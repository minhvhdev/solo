import { useMemo } from 'react';

import { PowerDisplay } from '@ms/components/atoms';
import { WithBackdropDetailProps, withBackdropDetail } from '@ms/HOCs';
import styles from './Location.css';

type LocationProps = WithBackdropDetailProps & {
  name: string;
  yourPower: number;
  opponentPower: number;
  className?: string;
};

const Location = withBackdropDetail((props: LocationProps) => {
  const {
    name,
    yourPower,
    opponentPower,
    className = '',
    isShowDetail,
    showBackdrop,
  } = props;

  const imgLink = useMemo(() => {
    return `url('/assets/images/marvel-snap/locations/${name}.webp`;
  }, [name]);

  return (
    <div
      className={`${className} ${styles.location} `}
      style={{
        backgroundImage: imgLink,
      }}
      onClick={showBackdrop}
      onKeyDown={showBackdrop}
    >
      {!isShowDetail && (
        <>
          <PowerDisplay isWin={false} className={styles.yourPower}>
            {yourPower}
          </PowerDisplay>
          <PowerDisplay isWin={false} className={styles.opponentPower}>
            {opponentPower}
          </PowerDisplay>
        </>
      )}
    </div>
  );
});

export default Location;
