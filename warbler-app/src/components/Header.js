import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../images/warbler-logo.png';

class Header extends React.Component {
  render () {
    return (
      <header className="Header">
        <nav className="NavBar">
          <a href="/">
            <img className="Logo" src={logo} alt="Warbler logo" />
          </a>

          <a className="Brand" href="/">Warbler</a>

          <div className="NavBar-Account">
            <a className="Button SpaceRight" onClick={this.props.onSignupClick}>Sign up</a>
            <a className="Button" onClick={this.props.onLoginClick}>Log in</a>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onSignupClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired
};

export default Header;
