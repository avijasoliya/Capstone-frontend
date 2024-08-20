import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./theme";
import App from "./App";
import "@/assets/css/style.css";
import { Provider } from "react-redux";
import { store } from "./store/store.config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
