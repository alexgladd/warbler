import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import './AuthHome.css';

class AuthHome extends React.Component {
  render () {
    const { user, messages } = this.props;

    return (
      <div className="AuthHome">
        <div className="User">
          <img className="UserImg" src={user.profileImgUrl} alt="User profile avatar" />
          <div className="UserName">{user.username}</div>
        </div>
        <div className="Messages">
          { messages.map((msg, idx) => <Message message={msg} key={`msg-${idx}`} />) }
        </div>
      </div>
    );
  }
}

AuthHome.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

export default AuthHome;
