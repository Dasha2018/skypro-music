import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicData } from '@/sharedTypes/sharedTypes';

type initialStateType = {
  currentTrack: null | MusicData;
  isPlay: boolean;
  isShuffle: boolean;
  shuffledPlaylist: MusicData[];
  tracks: MusicData[];
  allTracks: MusicData[];
  fetchError: null | string;
  fetchIsLoading: boolean;
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShuffle: false,
  tracks: [],
  shuffledPlaylist: [],
  allTracks: [],
  fetchError: null,
  fetchIsLoading: true,
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<MusicData>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<MusicData[]>) => {
      state.tracks = action.payload;
      state.shuffledPlaylist = [...state.tracks].sort(
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
      if (state.currentTrack && state.tracks.length > 0) {
        const playlist = state.isShuffle
          ? state.shuffledPlaylist
          : state.tracks;
        const curIndex = state.tracks.findIndex(
          (el) => el._id === state.currentTrack?._id,
        );
        const nextIndex = curIndex + 1;

        if (nextIndex >= playlist.length) return;

        state.currentTrack = playlist[nextIndex];
      }
    },
    setPrevTrack: (state) => {
      if (state.currentTrack && state.tracks.length > 0) {
        const curIndex = state.tracks.findIndex(
          (el) => el._id === state.currentTrack?._id,
        );
        const prevIndex = curIndex - 1;

        if (prevIndex < 0) return;

        state.currentTrack = state.tracks[prevIndex];
      }
    },
    setAllTracks: (state, action: PayloadAction<MusicData[]>) => {
      state.allTracks = action.payload;
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.fetchError = action.payload;
    },
    setFetchIsLoading: (state, action: PayloadAction<boolean>) => {
      state.fetchIsLoading = action.payload;
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
  setAllTracks,
  setFetchError,
  setFetchIsLoading,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
