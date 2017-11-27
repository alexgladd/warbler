import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ msg, onClose }) => {
  return (
    <div className="AlertOverlay">
      <div className="Alert">
        {msg}
        <div className="Close" onClick={onClose}>
          <i className="fa fa-times-circle"></i>
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Alert;
