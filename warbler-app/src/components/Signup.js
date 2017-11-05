import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/user';
import './Signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      profileImgUrl: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  render () {
    const { handleSignup } = this.props;
    const { email, username, password, profileImgUrl } = this.state;

    return (
      <div className="Signup">
        <div className="SignupForm">
          <h1>Sign up for Warbler!</h1>

          <label>Email</label>
          <input className="SignupInput" name="email" type="text" size="40"
            placeholder="Enter your email address..."
            value={email} onChange={this.handleInputChange}/>

          <label>Username</label>
          <input className="SignupInput" name="username" type="text" size="40"
            placeholder="Enter your desired username..."
            value={username} onChange={this.handleInputChange}/>

          <label>Password</label>
          <input className="SignupInput" name="password" type="password" size="40"
            placeholder="Choose a strong password..."
            value={password} onChange={this.handleInputChange}/>

          <label>Profile Image URL</label>
          <input className="SignupInput" name="profileImgUrl" type="text" size="40"
            placeholder="Enter a URL for your profile image..."
            value={profileImgUrl} onChange={this.handleInputChange}/>

          <div>
            <button className="BtnPrimary" type="button"
              onClick={() => handleSignup({ email, username, password, profileImgUrl })}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleSignup(signupInfo) { dispatch(signupUser(signupInfo)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
