import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/stylesheet.css";

import App from "./App";

import rootReducer from "./redux/reducer.js";

// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
