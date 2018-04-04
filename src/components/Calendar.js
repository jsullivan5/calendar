import React from 'react';
import Day from './Day';
import { october, november } from '../mockCalData';

const addClass = (index) => {
  if (index % 7 === 0 || (index - 1) % 7 === 0) {
    return true;
  }
  return false;
};

const renderCal = () => october.map((day, i) => {
  const calendarDay = i + 1;
  const isWeekend = addClass(calendarDay);

  return (
    <Day
      key={`oct-${i}`}
      weekend={isWeekend}
      day={calendarDay}
      events={day.events}
    />
  );
});

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      october: [],
      november: [],
    };
  }
  componentDidMount() {
    this.setState({
      october,
      november,
    });
  }

  render() {
    const calDays = renderCal();

    return (
      <main className="grid">
        {calDays}
      </main>
    );
  }
}

export default Calendar;
