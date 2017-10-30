import React from 'react';
import './Signup.css';

import api from '../util/WarblerApi';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      profileImgUrl: ''
    }

    this.handleSigupSubmit = this.handleSigupSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSigupSubmit() {
    const req = Object.assign({}, this.state);
    api.signup(req).then(signupData => {
      console.log('Signup successful', signupData);
    }).catch(errData => {
      console.error('Signup error', errData);
    });
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  render () {
    return (
      <div className="Signup">
        <div className="SignupForm">
          <h1>Sign up for Warbler!</h1>

          <label>Email</label>
          <input className="SignupInput" name="email" type="text" size="40"
            placeholder="Enter your email address..."
            value={this.state.email} onChange={this.handleInputChange}/>

          <label>Username</label>
          <input className="SignupInput" name="username" type="text" size="40"
            placeholder="Enter your desired username..."
            value={this.state.username} onChange={this.handleInputChange}/>

          <label>Password</label>
          <input className="SignupInput" name="password" type="password" size="40"
            placeholder="Choose a strong password..."
            value={this.state.password} onChange={this.handleInputChange}/>

          <label>Profile Image URL</label>
          <input className="SignupInput" name="profileImgUrl" type="text" size="40"
            placeholder="Enter a URL for your profile image..."
            value={this.state.profileImgUrl} onChange={this.handleInputChange}/>

          <div>
            <button className="BtnPrimary" type="button" onClick={this.handleSigupSubmit}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
