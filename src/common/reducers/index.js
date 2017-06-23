import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import post from './data/postReducers';
import user from './data/userReducers';
import comment from './data/commentReducers';
// import routes from './routes';

const rootReducer = combineReducers({
  ui,
  post,
  user,
  comment,
});

export default rootReducer;
