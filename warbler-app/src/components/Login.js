import React from 'react';
import './Login.css';

import api from '../util/WarblerApi';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLoginSubmit() {
    const req = Object.assign({}, this.state);
    api.login(req).then(loginData => {
      console.log('Login successful', loginData);
    }).catch(err => {
      console.error('Login error', err);
    });
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  render () {
    return (
      <div className="Login">
        <div className="LoginForm">
          <h1>Log in to Warbler</h1>

          <label>Email</label>
          <input className="LoginInput" name="email" type="text" size="40"
            placeholder="Enter your user email..."
            value={this.state.email} onChange={this.handleInputChange}/>

          <label>Password</label>
          <input className="LoginInput" name="password" type="password" size="40"
            placeholder="Enter your user password..."
            value={this.state.password} onChange={this.handleInputChange}/>

          <div>
            <button className="BtnPrimary" type="button" onClick={this.handleLoginSubmit}>
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
