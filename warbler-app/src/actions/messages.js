// warbler messages actions

import api from '../util/WarblerApi';
import { ErrorSources, setError } from './errors';

export const MessagesActions = {
  load: 'LOAD_MESSAGES',
  add: 'ADD_MESSAGES'
};

export const loadMessages = (messages) => ({
  type: MessagesActions.load,
  messages
});

export const addMessage = (message) => ({
  type: MessagesActions.add,
  message
});

export const fetchMessages = () => {
  return (dispatch) => {
    api.getMessages()
      .then(res => dispatch(loadMessages(res.messages)))
      .catch(err => dispatch(setError({ ...err, src: ErrorSources.getMessages })));
  };
}

export const createMessage = (msgInfo, user) => {
  return (dispatch) => {
    api.createMessage(msgInfo, user)
      .then(msg => dispatch(addMessage(msg)))
      .catch(err => dispatch(setError({ ...err, src: ErrorSources.addMessage })));
  }
}
