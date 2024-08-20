import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import storeSoundReducer from "./sound/sound.reducer";

export const rootReducer = (history) =>
  combineReducers({
    storeHistoryReducer: connectRouter(history),
    storeSoundReducer: storeSoundReducer,
  });
