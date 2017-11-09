// warbler api abstraction
// use native fetch for api calls

const buildInit = (init={}, extraHeaders={}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const headers = new Headers(Object.assign({}, defaultHeaders, extraHeaders));

  const defaultInit = {
    method: 'GET',
    mode: 'cors',
    headers
  };

  return Object.assign({}, defaultInit, init);
}

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else if (response.status >= 400 && response.status < 500) {
    return response.json().then(errData => {
      throw errData;
    });
  } else {
    const err = { error: "The API server encountered an error or isn't responding" };
    throw err;
  }
}

const signup = (signupParams) => {
  const init = buildInit({
    method: 'POST',
    body: JSON.stringify(signupParams)
  });

  return fetch('/api/users', init).then(handleResponse);
}

const login = (loginParams) => {
  const init = buildInit({
    method: 'POST',
    body: JSON.stringify(loginParams)
  });

  return fetch('/api/authenticate', init).then(handleResponse);
}

const getMessages = () => {
  return fetch('/api/messages', buildInit()).then(handleResponse);
}

const createMessage = (msgParams, user) => {
  const init = buildInit(
    { method: 'POST', body: JSON.stringify(msgParams) },
    { 'Authorization': `Bearer ${user.token}` }
  );

  return fetch(`/api/users/${user.userId}/messages`, init).then(handleResponse);
}

export default {
  signup,
  login,
  getMessages,
  createMessage
};
