// warbler error reducers

import { ErrorActions } from '../actions/errors';

const errorReducer = (state=null, action) => {
  switch (action.type) {
    case ErrorActions.set:
      return { ...action.errorInfo };

    case ErrorActions.clear:
      return null;

    default:
      return state;
  }
}

export default errorReducer;
