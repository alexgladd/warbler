import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Header.css';
import logo from '../images/warbler-logo.png';

class Header extends React.Component {
  render () {
    const { user, handleLogout } = this.props;

    let accountSection;
    if (user) {
      accountSection = (
        <div className="NavBar-Account">
          <div className="User SpaceRight">
            {user.username}
          </div>
          <a className="Button" onClick={() => handleLogout()}>Log out</a>
        </div>
      );
    } else {
      accountSection = (
        <div className="NavBar-Account">
          <Link className="Button SpaceRight" to="/signup">Sign up</Link>
          <Link className="Button" to="/login">Log in</Link>
        </div>
      );
    }

    return (
      <header className="Header">
        <nav className="NavBar">
          <Link to="/">
            <img className="Img" src={logo} alt="Warbler logo" />
          </Link>

          <Link className="Brand" to="/">Warbler</Link>

          { accountSection }
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func.isRequired
};

export default Header;
