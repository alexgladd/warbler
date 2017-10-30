import React from 'react';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

const pages = {
  home: 'home', signup: 'signup', login: 'login'
}

const Home = () => {
  return (
    <div className="Home">
      <h1>Warbler Home</h1>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: pages.home
    };

    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleSignupClick() {
    this.setState({ page: pages.signup });
  }

  handleLoginClick() {
    this.setState({ page: pages.login });
  }

  getContentComponent() {
    switch(this.state.page) {
      case pages.signup:
        return <Signup />;

      case pages.login:
        return <Login />;

      case pages.home:
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header onSignupClick={this.handleSignupClick} onLoginClick={this.handleLoginClick}/>
        { this.getContentComponent() }
      </div>
    );
  }
}

export default App;
