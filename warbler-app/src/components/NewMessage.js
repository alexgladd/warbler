import React from 'react';
import PropTypes from 'prop-types';
import './NewMessage.css';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSend() {
    this.props.createMessage(this.state.text);
    this.setState({ text: '' });
  }

  render () {
    const { text } = this.state;
    const { show, closeCompose } = this.props;
    const remChars = 160 - text.length;

    const modalClasses = show ? 'Modal ModalShow' : 'Modal';
    const overLimit = remChars < 0;
    const limitClasses = overLimit ? 'CharLimit CharLimitReached' : 'CharLimit';

    return (
      <div className={modalClasses}>
        <div className="NewMessage">
          <div className="Title">
            <h3>Create a new message</h3>
          </div>
          <div className="Close">
            <div className="CloseBtn" onClick={closeCompose}>&times;</div>
          </div>
          <div className="TextArea">
            <textarea rows="3" placeholder="Enter your message..." value={text}
              onChange={this.handleTextChange}></textarea>
          </div>
          <div className={limitClasses}>{remChars}</div>
          <div className="SendMsg">
            <button className="BtnPrimary" type="button"
              disabled={text.length === 0 || overLimit}
              onClick={this.handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

NewMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  closeCompose: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired
};

export default NewMessage;
