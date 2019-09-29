import React from 'react';
import uuid from 'uuid';
import ProfileCard from './ProfileCard';
import * as data from './organizer-list.json';
import './style.scss';

const OrganizerProfiles = () => {
  return (
    <div className="organizer-profiles">
      <h1 className="organizer-title">Our Organizers</h1>
      <div className="organizer-profile-cards">
        {data.organizers.map(organizer => {
          return <ProfileCard key={uuid.v4()} {...organizer} />;
        })}
      </div>
    </div>
  );
};

export default OrganizerProfiles;
