import { combineReducers } from "redux";
import posts from "./Posts/reducers/reducer";

export const reducers = combineReducers({
  posts: posts,
});
