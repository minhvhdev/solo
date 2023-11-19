import { RootState } from '@common/redux/store';

export const selectGamePlay = (state: RootState) => state.marvelSnap.gamePlay;
