import React from 'react';

import './style.scss';
import HackWITusOrganizersPhoto from '../../../assets/images/hackwitus-organizers.jpg';

const BecomeAnOrganizer = props => {
  return (
    <div className="organizer">
      <div className="organizer__image">
        <img
          src={HackWITusOrganizersPhoto}
          alt="HackWITus Oragnizers"
          className="organizer__image"
        />
      </div>
      <div className="organizer__content">
        <h2 className="organizer__title">
          <span
            role="img"
            aria-label={props.label ? props.label : ''}
            aria-hidden={props.label ? 'false' : 'true'}
          >
            👷‍♂️
          </span>
          &nbsp; Want to help?
        </h2>
        <p className="organizer__body">
          We are constantly looking for passionate people who want to get
          experience organizing Wentworth's biggest student run event HackWITus!
          Get first hand experience what it's like to:
        </p>
        <ul className="organizer__list">
          <li className="organizer__list-item">
            Work with a team of diverse individuals
          </li>
          <li className="organizer__list-item">
            Connect with industry professionals and leading companies
          </li>
          <li className="organizer__list-item">
            Harnessing your creative talent and design marketing material
          </li>
          <li className="organizer__list-item">
            Develop better user experiences and learn new technologies
          </li>
          <li className="organizer__list-item">
            Budget resources and research optimal costs for the best event ever
          </li>
        </ul>
        <div className="faq__lower">
          <h3 className="faq__meta">Interested Yet?</h3>
          <a href="/" className="faq__toggle">
            Organizer Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnOrganizer;
