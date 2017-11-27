// warbler error actions

export const ErrorSources = {
  signup: 'SIGNUP_ERR',
  login: 'LOGIN_ERR',
  getMessages: 'GET_MSGS_ERR',
  addMessage: 'ADD_MSG_ERR'
};

export const ErrorActions = {
  set: 'SET_ERROR',
  clear: 'CLEAR_ERROR'
};

export const setError = (errorInfo) => ({
  type: ErrorActions.set,
  errorInfo
});

export const clearError = () => ({
  type: ErrorActions.clear
});
