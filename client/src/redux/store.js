import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootreducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default store;
