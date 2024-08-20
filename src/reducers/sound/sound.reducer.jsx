import { createSlice } from "@reduxjs/toolkit";

const storeSoundSlice = createSlice({
  name: "sound",
  initialState: {
    soundList: null,
    soundDetails: null,
  },
  reducers: {
    storeSoundList: (state, action) => {
      state.soundList = action.payload;
    },
    storeSoundDetail: (state, action) => {
      state.soundDetails = action.payload;
    },
  },
});

export const { storeSoundList, storeSoundDetail } = storeSoundSlice.actions;
export default storeSoundSlice.reducer;
