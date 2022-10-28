import { combineReducers } from "redux";
import freeBoard from "./modules/freeBoard";
import user from "./modules/user";
export default combineReducers({
  freeBoard,
  user,
});
