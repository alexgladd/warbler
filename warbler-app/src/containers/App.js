import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Signup from '../components/Signup';
import Login from '../components/Login';
import { logoutUser } from '../actions/user';
import './App.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>Warbler Home</h1>
    </div>
  );
}

class App extends React.Component {
  render() {
    const { user, handleLogout } = this.props;

    return (
      <div className="App">
        <Header user={user} handleLogout={handleLogout}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout() { dispatch(logoutUser()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
