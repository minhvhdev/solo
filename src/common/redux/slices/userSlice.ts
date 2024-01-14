import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'game-play',
  initialState: {
    value: 0,
  },
  reducers: {
    loginAction: (state) => {
      state.value += 1;
    },
    logoutAction: (state, action) => {},
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
