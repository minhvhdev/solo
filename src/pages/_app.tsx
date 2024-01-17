import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/globals.css';
import redux, { storeWrapper } from '@common/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={redux.store}>
      // <PersistGate loading={null} persistor={redux.persistor}>
        <Component {...pageProps} />
      // </PersistGate>
    //</Provider>
  );
}

// export default MyApp;
export default storeWrapper.withRedux(MyApp);
