import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';

import { encryptTransform } from '@common/helpers/redux.helper';
import blackJackReducer from '@bj/redux/blackJackReducer';
import { peerReducer, playerReducer } from './slices';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptTransform()],
};

//Add Reducers here
const rootReducer = combineReducers({
  peer: peerReducer,
  player: playerReducer,
  blackJack: blackJackReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  // if (typeof window === 'undefined') {
  //   return configureStore({
  //     reducer: combineReducers({}),
  //   });
  // }
  const store = configureStore({
    reducer: rootReducer,
  });
  // store._persistor = persistStore(store);
  return store;
};

const store = makeStore();

const persistor = persistStore(store);

export type TRootState = ReturnType<typeof store.getState>;
export type TStore = ReturnType<typeof makeStore>;

export const storeWrapper = createWrapper<TStore>(makeStore);
export default { store, persistor };
