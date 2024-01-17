import React, { useState } from 'react';

import styles from './withBackdropDetail.css';

export type WithBackdropDetailProps = {
  showBackdrop?: () => void;
  isShowDetail?: boolean;
};

function withBackdropDetail<P>(
  WrappedComponent: React.FC<P & WithBackdropDetailProps>,
) {
  const WithBackdropDetail = (props: P) => {
    const [visible, setVisible] = useState(false);

    const showBackdrop = () => {
      setVisible(true);
    };

    const hideBackdrop = () => {
      setVisible(false);
    };

    return (
      <>
        {visible && (
          <>
            <div
              className={styles.backdrop}
              onClick={hideBackdrop}
              onKeyDown={hideBackdrop}
            />
            <WrappedComponent
              {...props}
              className={styles.contentDetail}
              isShowDetail={visible}
            />
          </>
        )}
        <WrappedComponent {...props} showBackdrop={showBackdrop} />
      </>
    );
  };

  return WithBackdropDetail;
}

export default withBackdropDetail;
