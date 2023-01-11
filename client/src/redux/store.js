import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootreducer";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

export default store;
