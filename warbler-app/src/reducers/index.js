import { combineReducers } from 'redux';
import userReducer from './user';
import messagesReducer from './messages';
import errorReducer from './errors';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
  error: errorReducer
});

export default rootReducer;
