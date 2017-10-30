import React from 'react';
import './Login.css';

class Login extends React.Component {
  render () {
    return (
      <div className="Login">
        <div className="LoginForm">
          <h1>Log in to Warbler</h1>

          <label htmlFor="email">Email</label>
          <input className="LoginInput" id="email" type="text" size="40"
            placeholder="Enter your user email..."/>

          <label htmlFor="password">Password</label>
          <input className="LoginInput" id="password" type="text" size="40"
            placeholder="Enter your user password..."/>

          <div>
            <button className="BtnPrimary" type="button">
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
