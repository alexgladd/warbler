import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Header.css';
import logo from '../images/warbler-logo.png';

class Header extends React.Component {
  render () {
    return (
      <header className="Header">
        <nav className="NavBar">
          <Link to="/">
            <img className="Logo" src={logo} alt="Warbler logo" />
          </Link>

          <Link className="Brand" to="/">Warbler</Link>

          <div className="NavBar-Account">
            <Link className="Button SpaceRight" to="/signup">Sign up</Link>
            <Link className="Button" to="/login">Log in</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
