import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicData } from '@/sharedTypes/sharedTypes';

type initialStateType = {
  currentTrack: null | MusicData;
  isPlay: boolean;
  isShuffle: boolean;
  shuffledPlaylist: MusicData[];
  playlist: MusicData[];
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShuffle: false,
  playlist: [],
  shuffledPlaylist: [],
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<MusicData>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<MusicData[]>) => {
      state.playlist = action.payload;
      state.shuffledPlaylist = [...state.playlist].sort(
        () => Math.random() - 0.5,
      );
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
    setNextTrack: (state) => {
      if (state.currentTrack && state.playlist.length > 0) {
        const playlist = state.isShuffle
          ? state.shuffledPlaylist
          : state.playlist;
        const curIndex = state.playlist.findIndex(
          (el) => el._id === state.currentTrack?._id,
        );
        const nextIndex = curIndex + 1;

        if (nextIndex >= playlist.length) return;

        state.currentTrack = playlist[nextIndex];
      }
    },
    setPrevTrack: (state) => {
      if (state.currentTrack && state.playlist.length > 0) {
        const curIndex = state.playlist.findIndex(
          (el) => el._id === state.currentTrack?._id,
        );
        const prevIndex = curIndex - 1;

        if (prevIndex < 0) return;

        state.currentTrack = state.playlist[prevIndex];
      }
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlay,
  setCurrentPlaylist,
  setNextTrack,
  setPrevTrack,
  toggleShuffle,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
