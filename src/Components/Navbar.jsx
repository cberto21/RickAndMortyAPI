import React from 'react';
import logo from '../img/logo.png'
import './style/logo.css'
const Navbar = () => {

  return (
    <div className='wrapper'>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
        <div className='justify-align-content-md-start' >
          <a href="/">
            <img src={logo} className="logoSize" />
          </a>
          </div>
          <div className='justify-content-end' >


          <a
            className="text-uppercase navbar-brand typeFace"
            target="_blank"
            href="https://rickymortylatino.com/"
          >
            Ver capitulos online
          </a>
          </div>
        </div>
      </nav>
    </div>
  );

}
export default Navbar;
