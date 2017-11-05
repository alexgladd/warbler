import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/user';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkForUser = this.checkForUser.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  checkForUser() {
    const { user, history } = this.props;

    if (user) {
      history.replace('/');
    }
  }

  componentDidMount() {
    this.checkForUser();
  }

  componentDidUpdate(pp, ps) {
    this.checkForUser();
  }

  render () {
    const { handleLogin } = this.props;
    const { email, password } = this.state;

    return (
      <div className="Login">
        <div className="LoginForm">
          <h1>Welcome back to Warbler</h1>

          <label>Email</label>
          <input className="LoginInput" name="email" type="text" size="40"
            placeholder="Enter your user email..."
            value={email} onChange={this.handleInputChange}/>

          <label>Password</label>
          <input className="LoginInput" name="password" type="password" size="40"
            placeholder="Enter your user password..."
            value={password} onChange={this.handleInputChange}/>

          <div>
            <button className="BtnPrimary" type="button"
              onClick={() => handleLogin({ email, password })}>
              Log in
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
  handleLogin(authInfo) { dispatch(authenticateUser(authInfo)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
