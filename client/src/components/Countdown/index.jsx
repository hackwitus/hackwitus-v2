import React from 'react';
import Countdown from 'react-countdown-now';
import './style.scss';

const renderer = ({days, hours, minutes, seconds, completed}) => {
  return (
    !completed ? 
    (
    <div className="countdown">
      <h1 className="countdown__title">Time Until HackWITus: </h1>
      <div className="countdown__container">
        <div className="countdown__column">
        <h1 className="countdown__label">Days</h1>
        <h3 className="countdown__value">{days}</h3>
      </div>
      <div className="countdown__column">
        <h1 className="countdown__label">Hours</h1>
        <h3 className="countdown__value">{hours}</h3>
      </div>
      <div className="countdown__column">
        <h1 className="countdown__label">Minutes</h1>
        <h3 className="countdown__value">{minutes}</h3>
      </div>
      <div className="countdown__column">
        <h1 className="countdown__label">Seconds</h1>
        <h3 className="countdown__value">{seconds}</h3>
      </div>
      </div>
    </div>
    )
    : ""
  )
}

const CountdownTimer = ({date}) => {
  return (
    <Countdown 
      date={date} 
      renderer={renderer}
    />
  )
}

export default CountdownTimer;