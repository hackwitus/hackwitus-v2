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
          <button className="btn btn-primary">Register To Attend</button>
          <button className="btn btn-secondary">Request to Mentor</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
