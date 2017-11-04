// warbler messages reducers

import { MessagesActions } from '../actions/messages';

const messagesReducer = (state=[], action) => {
  switch (action.type) {
    case MessagesActions.load:
      return [...action.messages];

    case MessagesActions.add:
      return [action.message, ...state];

    default:
      return state;
  }
}

export default messagesReducer;
