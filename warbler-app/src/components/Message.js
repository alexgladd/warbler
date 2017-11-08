import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Message.css';

const Message = ({ message }) => {
  const { author, text, createdAt } = message;
  const msgDate = moment(createdAt).format('LLL');
  const dateFromNow = moment(createdAt).fromNow();

  return (
    <div className="Message">
      <img className="AuthorImg" src={author.profileImgUrl} alt="Message author avatar" />
      <div className="Author">{author.username}</div>
      <div className="Text">{text}</div>
      <div className="Info" title={msgDate}>{dateFromNow}</div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired
};

export default Message;
