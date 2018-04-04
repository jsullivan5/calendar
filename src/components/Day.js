import React from 'react';
import Event from './Event';

class Day extends React.Component {
  generateEvents() {
    let dailyEvents;

    if (this.props.events.length > 0) {
      dailyEvents = this.props.events.map(ev => (
        <Event
          key={ev.name}
          name={ev.name}
        />
      ));
    }

    return dailyEvents || null;
  }

  render() {
    const dailyEvents = this.generateEvents();

    return (
      <div
        className={`day ${this.props.weekend ? 'weekend' : null}`}
        onClick={this.props.onClick}
      >
        <p>{this.props.day}</p>
        {dailyEvents}
      </div>
    );
  }
}

export default Day;
