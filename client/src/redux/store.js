import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = configureStore(rootreducer, compose(applyMiddleware(thunk)));

export default store;
