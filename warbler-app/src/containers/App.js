import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Signup from '../components/Signup';
import Login from '../components/Login';
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
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
