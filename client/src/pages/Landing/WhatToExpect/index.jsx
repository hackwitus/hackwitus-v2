import React from 'react';

import './style.scss';
import HackwitusProjectTeams from '../../../assets/images/hackwitus-project-teams.jpg';

const Expect = props => {
  return (
    <div className="expect">
      <div className="expect__content">
        <h2 className="expect__title">
          <span
            role="img"
            aria-label={props.label ? props.label : ''}
            aria-hidden={props.label ? 'false' : 'true'}
          >
            👾
          </span>
          &nbsp; What To Expect?
        </h2>
        <p className="expect__body">
          HackWITus is a 24 hour, student organized hackathon for all university
          students. Hosted by Wentworth Institute of Technology and Accelerate
          Innovation and Entrepreneurship Center, HackWITus strives to provide
          an inclusive and accessible hacker experience. Come learn a new
          language or experiment with hardware, compete for awesome prizes, and
          network with the top tech companies Boston has to offer!
        </p>
      </div>
      <div className="expect__image">
        <img
          src={HackwitusProjectTeams}
          alt="HackWITus Project Teams"
          className="expect__image"
        />
      </div>
    </div>
  );
};

export default Expect;
