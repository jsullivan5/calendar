import React from 'react';
import Event from './Event';

const Day = (props) => {
  let dailyEvents;

  if (props.events.length > 0) {
    dailyEvents = props.events.map(ev => (
      <Event
        key={ev.name}
        name={ev.name}
      />
    ));
  }

  return (
    <div className={`day ${props.weekend ? 'weekend' : null}`}>
      <p>{props.day}</p>
      {dailyEvents || null}
    </div>
  );
};

export default Day;
