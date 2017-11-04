// warbler user actions

export const UserActions = {
  login: 'USER_LOGIN',
  logout: 'USER_LOGOUT'
};

export const userLogin = (userInfo) => ({
  type: UserActions.login,
  userInfo
});

export const userLogout = () => ({
  type: UserActions.logout
});
