// warbler user reducers

import { UserActions } from '../actions/user';

const userReducer = (state=null, action) => {
  switch (action.type) {
    case UserActions.login:
      return {...action.userInfo};

    case UserActions.logout:
      return null;

    default:
      return state;
  }
}

export default userReducer;
