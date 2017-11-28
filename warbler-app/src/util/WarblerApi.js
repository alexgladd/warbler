// warbler api abstraction
// use native fetch for api calls

let rootUrl;
if (process.env.NODE_ENV === 'production') {
  rootUrl = 'https://agladd-warbler.herokuapp.com';
} else {
  rootUrl = '';
}

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
  } else if (response.status >= 400 && response.status <= 500) {
    return response.json().then(errData => {
      if (errData && errData.message) {
        throw errData;
      } else {
        const err = { message: "The API server encountered an error or isn't responding" };
        throw err;
      }
    });
  } else {
    const err = { message: "The API server encountered an error or isn't responding" };
    throw err;
  }
}

const signup = (signupParams) => {
  const init = buildInit({
    method: 'POST',
    body: JSON.stringify(signupParams)
  });

  return fetch(`${rootUrl}/api/users`, init).then(handleResponse);
}

const login = (loginParams) => {
  const init = buildInit({
    method: 'POST',
    body: JSON.stringify(loginParams)
  });

  return fetch(`${rootUrl}/api/authenticate`, init).then(handleResponse);
}

const getMessages = () => {
  return fetch(`${rootUrl}/api/messages`, buildInit()).then(handleResponse);
}

const createMessage = (msgParams, user) => {
  const init = buildInit(
    { method: 'POST', body: JSON.stringify(msgParams) },
    { 'Authorization': `Bearer ${user.token}` }
  );

  return fetch(`${rootUrl}/api/users/${user.userId}/messages`, init).then(handleResponse);
}

export default {
  signup,
  login,
  getMessages,
  createMessage
};
