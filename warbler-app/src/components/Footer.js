import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className="Footer">
          <a href="https://github.com/alexgladd/warbler">
            <i className="fa fa-github fa-lg"></i>  Warbler
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
