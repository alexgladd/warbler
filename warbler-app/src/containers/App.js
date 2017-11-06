import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Signup from '../components/Signup';
import Login from '../components/Login';
import { logoutUser } from '../actions/user';
import hero from '../images/warbler-hero.jpg';
import './App.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Warbler</h1>
      <div className="Hero">
        <img className="HeroImg" src={hero} alt="Warbler hero"/>
        <div className="HeroShadow"></div>
      </div>
      <h3>Warbler is a short message social network app.</h3>
      <h3>
        <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link> to get started
      </h3>

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
        <Footer />
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
