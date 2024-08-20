import { configureStore } from "@reduxjs/toolkit";
import { appConfig } from "../config";
import { createBrowserHistory } from "history";
import { rootReducer } from "../reducers";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: appConfig.APP_MODE === "development",
});
