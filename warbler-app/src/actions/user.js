// warbler user actions

import api from '../util/WarblerApi';
import LocalStore from '../util/LocalStore';
import { ErrorSources, setError } from './errors';

export const UserActions = {
  login: 'USER_LOGIN',
  logout: 'USER_LOGOUT'
};

export const loginUser = (userInfo) => ({
  type: UserActions.login,
  userInfo
});

export const logoutUser = () => ({
  type: UserActions.logout
});

export const authenticateUser = (authInfo) => {
  return (dispatch) => {
    api.login(authInfo).then(userInfo => {
      LocalStore.setUserInfo(userInfo);
      dispatch(loginUser(userInfo))
    }).catch(err => {
      dispatch(setError({ ...err, src: ErrorSources.login }));
    });
  };
}

export const signupUser = (signupInfo) => {
  return (dispatch) => {
    api.signup(signupInfo).then(userInfo => {
      LocalStore.setUserInfo(userInfo);
      dispatch(loginUser(userInfo));
    }).catch(err => {
      dispatch(setError({ ...err, src: ErrorSources.signup }));
    });
  };
}
