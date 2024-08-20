import { createSlice } from "@reduxjs/toolkit";

const storeAuthenticateSlice = createSlice({
  name: "userDetails",
  initialState: {
    userDetails: null,
    forgotPasswordDetails: null,
  },
  reducers: {
    storeAuthUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    storeForgotPasswordDetails: (state, action) => {
      state.forgotPasswordDetails = action.payload;
    },
  },
});

export const { storeAuthUserDetails, storeForgotPasswordDetails } =
  storeAuthenticateSlice.actions;
export default storeAuthenticateSlice.reducer;
