import React from 'react';

const Day = (props) => {
  const dayEvents = props.events.length > 0 ?
    <p>{props.events.name}</p> : null;

  return (
    <div className={`day ${props.weekend ? 'weekend' : null}`}>
      <p>{props.day}</p>
      {dayEvents}
    </div>
  );
};

export default Day;
