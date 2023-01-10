import { combineReducers } from "redux";
import Posts from "./Posts/reducers/reducer";

const rootreducer = combineReducers({
  Posts,
});

export default rootreducer;
