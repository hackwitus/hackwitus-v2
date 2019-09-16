import React from 'react';

import './style.scss';
import HackWITusOrganizersPhoto from '../../../assets/images/hackwitus-organizers.jpg';

const About = props => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={HackWITusOrganizersPhoto} alt="HackWITus Oragnizers" className="about__image"/>
      </div>
      <div className="about__content">
        <h2 className="about__title">
          <span 
            role="img" 
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}>
            🤔
          </span> HackWITus?
        </h2>
        <p className="about__body">
          HackWITus is a community oriented organization that aims to make a
          home for hackers in the Boston area. We strive to create a positive,
          energetic environment where any student is free to experiment,
          innovate, and compete with their peers. We believe that by providing
          the best resources, we ourselves are encouraging our members to reach
          their full potential. We go to great lengths because we believe
          students are the true innovators and will make the greatest impact in
          the world.
        </p>
        <p className="about__body">
        A central goal for HackWITus 2019 is to create a more diverse and inclusive environment for all hackers. In order to achieve our goal, we are taking steps to organize the event in a manner that provides a welcoming and fun experience for all attendees. Some things we are working on include:
        </p>
        <ul className="about__list">
          <li className="about__list-item">Tracking gender and nationality identifiers so we can report on our diversity growth over time.</li>
          <li className="about__list-item">Providing gender-neutral bathrooms. There will be at least one gender-neutral bathroom on every floor. We will still provide Male and Female bathrooms for those who wish to use them instead.</li>
          <li className="about__list-item">Translating our material into multiple languages in order to eliminate any sort of language barrier for attendees and sponsors.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
