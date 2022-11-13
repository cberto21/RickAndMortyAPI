import React from 'react';
import logo from '../img/logo.png'
import './style/logo.css'
const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/">
            <img src={logo} className="logoSize" />
          </a>
          <a
            className="text-uppercase navbar-brand typeFace"
            target="_blank"
            href="https://rickymortylatino.com/"
          >
            Ver capitulos online
          </a>
        </div>
      </nav>
    </div>
  );

}
export default Navbar;
