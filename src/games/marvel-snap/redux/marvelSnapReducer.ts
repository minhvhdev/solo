import { combineReducers } from '@reduxjs/toolkit';

import { gamePlayReducer } from './slices';

const marvelSnapReducer = combineReducers({
  gamePlay: gamePlayReducer,
});

export default marvelSnapReducer;
