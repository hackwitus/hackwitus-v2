import React from 'react';
import NavLink from './NavLink';

import {ReactComponent as Logo} from '../../assets/images/logos/leologo-white.svg';
import './style.scss';

const Navbar = (props) => {
  return (
    <div className={`navbar ${props.scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <Logo alt="HackWITus Logo" className={"navbar__logo-img"}/>
      </div>
      <ul className="navbar__menu">
        <NavLink to="/" label="Home" />
        <NavLink to="/api" label="API" />
        <NavLink to="/about" label="About" />
      </ul>
      <ul className="navbar__socials">
        <a href="https://twitter.com/hackwitus" className="navbar__social-link">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/hackwitus" className="navbar__social-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto:contact@hackwit.us" className="navbar__social-link">
          <i class="fad fa-paper-plane"></i>
        </a>
      </ul>
    </div>
  )
}

export default Navbar;