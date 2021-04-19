import { combineReducers } from "redux";
import posts from "./posts";
import id from "./currentID";

export default combineReducers({posts, id});