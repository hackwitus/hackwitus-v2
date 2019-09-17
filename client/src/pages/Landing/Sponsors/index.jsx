import React from 'react';

import './style.scss';
import Sponsor from './Sponsor';
import AccelerateLogo from '../../../assets/images/affiliates/accelerate-logo.png';
import ParticleLogo from '../../../assets/images/sponsors/particle-io-logo.png';
import WitCSDeptLogo from '../../../assets/images/sponsors/comp-sci-dept-logo.jpg';
import GithubLogo from '../../../assets/images/sponsors/github-logo.png';
import SketchLogo from '../../../assets/images/sponsors/sketch-logo.png';
import WitLeadershipLogo from '../../../assets/images/sponsors/wit-leadership-logo.png';
import CoopsCareersLogo from '../../../assets/images/affiliates/coops-careers-logo.png';

const Sponsors = props => {
  return (
    <div className="sponsors">
      <h1 className="sponsors__title">Sponsors</h1>
      <div className="sponsors__category">
        <h1 className="sponsors__teir-title">Platinum</h1>
        <div className="sponsors__teir">
         
        </div>
      </div>
      <div className="sponsors__category">
        <h1 className="sponsors__teir-title">Gold</h1>
        <div className="sponsors__teir">
          <Sponsor url="/" alt="Accelerate Logo" logo={AccelerateLogo} />
          <Sponsor url="/" alt="Particle IO Logo" logo={ParticleLogo} />
        </div>
      </div>
      <div className="sponsors__category">
        <h1 className="sponsors__teir-title">Silver</h1>
        <div className="sponsors__teir">
          <Sponsor url="/" alt="WIT CS Department Logo" logo={WitCSDeptLogo} />
        </div>
      </div>
      <div className="sponsors__category">
        <h1 className="sponsors__teir-title">Bronze</h1>
        <div className="sponsors__teir">
          <Sponsor url="/" alt="GitHub Logo" logo={GithubLogo} />
          <Sponsor url="/" alt="Sketch Logo" logo={SketchLogo} />
          <Sponsor url="/" alt="WIT Coops/Careers Logo" logo={CoopsCareersLogo} />
          <Sponsor url="/" alt="WIT Leadership Institute Logo" logo={WitLeadershipLogo} />
        </div>
      </div>
    </div>
  )
}

export default Sponsors;