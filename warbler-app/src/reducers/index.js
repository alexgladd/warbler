import { combineReducers } from 'redux';
import userReducer from './user';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer
});

export default rootReducer;
