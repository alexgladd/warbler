import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = ({ message }) => {
  const { author, text, createdAt } = message;

  return (
    <div className="Message">
      <img className="AuthorImg" src={author.profileImgUrl} alt="Message author avatar" />
      <div className="Author">{author.username}</div>
      <div className="Text">{text}</div>
      <div className="Info">{createdAt}</div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired
};

export default Message;
