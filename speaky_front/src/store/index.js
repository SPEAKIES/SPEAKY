import { combineReducers } from 'redux';
import freeBoard from './modules/freeBoard';
import user from './modules/user';
import community from './modules/community';
export default combineReducers({
  freeBoard,
  user,
  community,
});
