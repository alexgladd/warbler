import React from 'react';
import PropTypes from 'prop-types';
import './AuthHome.css';

class AuthHome extends React.Component {
  render () {
    const { user } = this.props;

    return (
      <div className="AuthHome">
        <div className="User">
          <img className="UserImg" src={user.profileImgUrl} alt="User profile avatar" />
          <div className="UserName">{user.username}</div>
        </div>
        <div className="Messages">Messages area</div>
      </div>
    );
  }
}

AuthHome.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

export default AuthHome;
