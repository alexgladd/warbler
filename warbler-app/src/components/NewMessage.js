import React from 'react';
import PropTypes from 'prop-types';
import './NewMessage.css';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: false,
      text: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSend() {
    this.props.createMessage(this.state.text);
    this.setState({ closed: true });
  }

  handleClose() {
    this.setState({ closed: true });
  }

  render () {
    const { closed, text } = this.state;
    const remChars = 160 - text.length;

    const modalClasses = closed ? 'Modal' : 'Modal ModalShow';
    const overLimit = remChars < 0;
    const limitClasses = overLimit ? 'CharLimit CharLimitReached' : 'CharLimit';

    return (
      <div className={modalClasses}>
        <div className="NewMessage">
          <div className="Title">
            <h3>Create a new message</h3>
          </div>
          <div className="Close">
            <div className="CloseBtn" onClick={this.handleClose}>&times;</div>
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
  createMessage: PropTypes.func.isRequired
};

export default NewMessage;
