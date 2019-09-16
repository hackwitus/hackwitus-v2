import React from 'react';

const Event = props => {
  return (
    <div className="event">
      <h1 className="event__title">
        {props.title}
      </h1>
      <p className="event__content">
        {props.content}
      </p>
    </div>
  )
}

export default Event;