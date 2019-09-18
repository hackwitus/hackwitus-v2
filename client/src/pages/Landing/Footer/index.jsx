import React from 'react';
import './style.scss';
import {ReactComponent as Logo} from '../../../assets/images/logos/leologo-white.svg';

const Footer = props => {
  return (
    <div className="footer">
      <h1 className="footer__message">
        <i className="fad fa-code"></i>
        <span>with</span>
        <i className="fad fa-heart"></i>
        <span>by</span>
        <Logo className="footer__icon"/>
      </h1>
    </div>
  )
}

export default Footer;