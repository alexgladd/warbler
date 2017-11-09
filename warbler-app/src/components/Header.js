import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import logo from '../images/warbler-logo.png';

class Header extends React.Component {
  render () {
    const { user, openCompose, logout, history } = this.props;

    let accountSection;
    if (user) {
      accountSection = (
        <div className="NavBar-Account">
          <div className="User SpaceRight">
            {user.username}
          </div>
          <button className="BtnPrimary SpaceRight" type="button"
            onClick={openCompose}>
            <i className="fa fa-edit"></i> New message
          </button>
          <button type="button" onClick={logout}>
            <i className="fa fa-sign-out"></i> Log out
          </button>
        </div>
      );
    } else {
      accountSection = (
        <div className="NavBar-Account">
          <button className="SpaceRight" ype="button"
            onClick={() => history.push('/signup')}>
            <i className="fa fa-user-plus"></i> Sign up
          </button>
          <button type="button"
            onClick={() => history.push('/login')}>
            <i className="fa fa-sign-in"></i> Log in
          </button>
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
  openCompose: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default withRouter(Header);
