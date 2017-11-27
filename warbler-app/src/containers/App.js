import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Signup from '../components/Signup';
import Login from '../components/Login';
import AuthHome from '../components/AuthHome';
import NewMessage from '../components/NewMessage';
import Alert from '../components/Alert';
import { logoutUser } from '../actions/user';
import { fetchMessages, createMessage } from '../actions/messages';
import { clearError } from '../actions/errors';
import hero from '../images/warbler-hero.jpg';
import './App.css';

const PublicHome = () => {
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
  constructor(props) {
    super(props);

    this.state = {
      composing: false
    };

    this.handleOpenCompose = this.handleOpenCompose.bind(this);
    this.handleCloseCompose = this.handleCloseCompose.bind(this);
    this.handleCreateMessage = this.handleCreateMessage.bind(this);
  }

  handleOpenCompose() {
    this.setState({ composing: true });
  }

  handleCloseCompose() {
    this.setState({ composing: false });
  }

  handleCreateMessage(msgText) {
    this.props.addMessage({ text: msgText }, this.props.user);
    this.setState({ composing: false });
  }

  componentDidMount() {
    const { user, getMessages } = this.props;

    if (user) {
      getMessages();
    }
  }

  componentDidUpdate() {
    const { user, messages, getMessages } = this.props;

    if (user && messages.length === 0) {
      getMessages();
    }
  }

  render() {
    const { composing } = this.state;
    const { user, messages, error, handleLogout, clearAlert } = this.props;

    let homeRoute;
    if (user) {
      homeRoute = <Route exact path="/" render={props => (
          <AuthHome user={user} messages={messages} {...props}/>
        )}/>
    } else {
      homeRoute = <Route exact path="/" component={PublicHome}/>
    }

    return (
      <div className="App">
        <Header user={user} openCompose={this.handleOpenCompose} logout={handleLogout}/>
        { error && <Alert msg={error.message} onClose={clearAlert} /> }
        <Switch>
          {homeRoute}
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
        <Footer />
        <NewMessage show={composing} createMessage={this.handleCreateMessage}
          closeCompose={this.handleCloseCompose}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout() { dispatch(logoutUser()) },
  getMessages() { dispatch(fetchMessages()) },
  addMessage(msgInfo, user) { dispatch(createMessage(msgInfo, user)) },
  clearAlert() { dispatch(clearError()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
