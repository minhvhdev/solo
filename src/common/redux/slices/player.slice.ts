import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { EPlayerStatus } from '@common/enums/player.enum';

type TPlayerInfo = {
  name: string;
  status: EPlayerStatus.IDLE;
};

const initialState: TPlayerInfo = {
  name: '',
  status: EPlayerStatus.IDLE,
};

const playerSlice = createSlice({
  name: 'game-play',
  initialState,
  reducers: {
    actInitPlayerInfo: (state) => {
      state.name = '';
    },
    actAddName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
  },
});

export const { actInitPlayerInfo, actAddName } = playerSlice.actions;
export default playerSlice.reducer;
