import React from 'react';

const ProfileCard = ({ first, last, role, bio, image, linkedin, github }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={image} alt="profile pic" className="profile-image" />
      </div>
      <h1 className="profile-name">
        {first} {last}
      </h1>
      <h4 className="profile-role">{role}</h4>
      <p className="profile-bio">{bio}</p>
      <div className="profile-links">
        {linkedin ? (
          <a href={linkedin} className="profile-link profile-link--linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        ) : (
          ''
        )}
        {github ? (
          <a href={github} className="profile-link profile-link--github">
            <i className="fab fa-github"></i>
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
