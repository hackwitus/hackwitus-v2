import React from 'react';

export default props => {
  return (
    <a href={props.url} className="sponsor__link">
      <img src={props.logo} alt={props.alt} className="sponsor__logo"/>
    </a>
  );
}