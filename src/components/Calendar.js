import React from 'react';
import Day from './Day';
import { october, november } from '../mockCalData';

const addClass = (index) => {
  if (index % 7 === 0 || (index - 1) % 7 === 0) {
    return true;
  }
  return false;
};

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      october,
      november,
      activeMonth: 'october',
      showModal: false,
    };
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent(calendarDay, eventInfo) {
    const { activeMonth } = this.state;
    const newState = [...this.state[activeMonth]];
    const index = calendarDay - 1;

    newState[index].events.push(eventInfo);

    this.setState({ [activeMonth]: newState });
  }

  renderCal() {
    const { activeMonth } = this.state;

    return this.state[activeMonth].map((day, i) => {
      const calendarDay = i + 1;
      const isWeekend = addClass(calendarDay);

      return (
        <Day
          key={`oct-${i}`}
          weekend={isWeekend}
          day={calendarDay}
          events={day.events}
          addEvent={this.addEvent}
        />
      );
    });
  }

  render() {
    const calDays = this.renderCal();

    return (
      <main className="grid">
        {calDays}
      </main>
    );
  }
}

export default Calendar;
