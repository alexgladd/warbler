// warbler api abstraction
// use native fetch for api calls

const buildInit = (init) => {
  const defaultHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  const defaultInit = {
    method: 'GET',
    headers: defaultHeaders,
    mode: 'cors'
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
    throw { error: "The API server encountered an error or isn't responding" };
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

export default {
  signup,
  login
};
