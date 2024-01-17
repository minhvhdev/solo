import { combineReducers } from '@reduxjs/toolkit';

import { bjGamePlayReducer } from './slices';

const blackJackReducer = combineReducers({
  gamePlay: bjGamePlayReducer,
});

export default blackJackReducer;
