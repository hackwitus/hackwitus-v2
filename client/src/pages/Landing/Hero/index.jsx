import React from 'react';
import { ReactComponent as Logo } from '../../../assets/images/logos/hackwit-text.svg';
import './style.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <Logo alt="HackWITus Logo" className="hero__logo" />
        <h2 className="hero__subheader">Wentworth's Annual Hackathon</h2>
        <p className="hero__meta">
          November 9-10, 2019
          <br />
          Wentworth Institute of Technology
        </p>
        <div className="btn__container">
          <a className="btn btn-primary" href="https://registration.hackwit.us/">Register To Attend</a>
          <a className="btn btn-secondary" href="https://gmail.us20.list-manage.com/subscribe?u=e95b659889f81a452382668e7&id=31fc93c922">Get Event Updates</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
