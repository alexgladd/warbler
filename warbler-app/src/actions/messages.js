// warbler messages actions

import api from '../util/WarblerApi';

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
      .catch(err => console.error('TODO: handle get messages errors', err));
  };
}
