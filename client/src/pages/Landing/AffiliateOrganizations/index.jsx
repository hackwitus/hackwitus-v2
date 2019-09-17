import React from 'react';
import './style.scss';
import AccelerateLogo from '../../../assets/images/affiliates/accelerate-logo.png';
import CoopsCareersLogo from '../../../assets/images/affiliates/coops-careers-logo.png';

const AffiliateOrganizations = props => {
  return (
    <div className="affiliates">
      <h1 className="affiliates__title">Our Affiliates</h1>
      <div className="affiliates__list">
        <a href="/" className="affiliates__link">
          <img
            src={AccelerateLogo}
            alt="Accelerate Logo"
            className="affiliates__image"
          />
        </a>
        <a href="/" className="affiliates__link">
          <img
            src={CoopsCareersLogo}
            alt="Coops-Careers Logo"
            className="affiliates__image"
          />
        </a>
      </div>
    </div>
  );
};

export default AffiliateOrganizations;
