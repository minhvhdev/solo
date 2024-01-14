import { configureStore } from '@reduxjs/toolkit';

import marvelSnapReducer from '@ms/redux/marvelSnapReducer';
import { userSliceReducer } from './slices';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    marvelSnap: marvelSnapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
