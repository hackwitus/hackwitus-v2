import React, { useState } from 'react';
import Event from './Event';
import data from './schedule.json';

import './style.scss';

export default props => {
  const [day, setDay] = useState('6')
  
  const renderEvents = () => {
    const {events} = data;
    // eslint-disable-next-line array-callback-return
    return events.map(event => {
      if (new Date(event.time).getUTCDay() === parseInt(day)) {
        return <Event key={event.key} title={event.text} content={new Date(event.time).toString()} />
      }
    });
  }

  const handleClick = (e) => {
    setDay(e.target.value);
  }
  
  return (
    <div className="event-schedule">
      <div className="event-schedule__upper">
      <h1 className="event-schedule__title">Event Schedule</h1>
      <div className="event-schedule__selector">
        <button className={`event-schedule__day ${day === '6' ? 'event-schedule__day--active' : ''}`} value="6" onClick={handleClick}>Saturday</button>
        <button className={`event-schedule__day ${day === '0' ? 'event-schedule__day--active' : ''}`} value="0" onClick={handleClick}>Sunday</button>
      </div>
      </div>
      
      
      <div className="event-schedule__list">
      {renderEvents()}
      </div>
    </div>
  );
}