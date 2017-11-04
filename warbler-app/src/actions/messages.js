// warbler messages actions

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
