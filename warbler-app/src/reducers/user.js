// warbler user reducers

import { UserActions } from '../actions/user';
import LocalStore from '../util/LocalStore';

const userReducer = (state=null, action) => {
  switch (action.type) {
    case UserActions.login:
      return {...action.userInfo};

    case UserActions.logout:
      LocalStore.clearUserInfo();
      return null;

    default:
      return state;
  }
}

export default userReducer;
