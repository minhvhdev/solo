import dynamic from 'next/dynamic';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import Peer from 'peerjs';

import { HYDRATE } from 'next-redux-wrapper';

import { EPlayerStatus } from '@common/enums/player.enum';
import { genId } from '@common/helpers';
import { TPeer } from '@common/types/peer.type';

const initialState: TPeer = {
  peer: null,
  connection: null,
  test: 0,
};

const peerSlice = createSlice({
  name: 'game-play',
  initialState,
  reducers: {
    createRoom: (state) => {
      // import('peerjs').then(({ default: Peer }) => {
      //   state.peer = new Peer();
      // });
      // state.peer = new Peer();
      console.log(123);
      state.test = 123123;
    },
    joinRoom: (state, { payload }: PayloadAction<string>) => {
      // state.connection = ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      onsole.log('HYDRATE', state, action.payload);
      return { ...state, ...action.payload.peer };
    });
  },
});

export const { createRoom, joinRoom } = peerSlice.actions;
export default peerSlice.reducer;
