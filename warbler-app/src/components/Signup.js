import React from 'react';
import './Signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.handleSigupSubmit = this.handleSigupSubmit.bind(this);
  }

  handleSigupSubmit() {
    console.log('Signup form submitted');
  }

  render () {
    return (
      <div className="Signup">
        <div className="SignupForm">
          <h1>Sign up for Warbler!</h1>

          <label htmlFor="email">Email</label>
          <input className="SignupInput" id="email" type="text" size="40"
            placeholder="Enter your email address..."/>

          <label htmlFor="username">Username</label>
          <input className="SignupInput" id="username" type="text" size="40"
            placeholder="Enter your desired username..."/>

          <label htmlFor="password">Password</label>
          <input className="SignupInput" id="password" type="text" size="40"
            placeholder="Choose a strong password..."/>

          <label htmlFor="profileImgUrl">Profile Image URL</label>
          <input className="SignupInput" id="profileImgUrl" type="text" size="40"
            placeholder="Enter a URL for your profile image..."/>

          <div>
            <button className="BtnPrimary" type="button" onClick={this.handleSigupSubmit}>
              Submit Signup
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
