import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { october, november } from '../mockCalData';

class Calendar extends React.Component {
  static addClass(index) {
    if (index % 7 === 0 || (index - 1) % 7 === 0) {
      return true;
    }
    return false;
  }

  constructor() {
    super();
    this.state = {
      october,
      november,
      activeMonth: 'october',
      showModal: false,
      months: ['october', 'november'],
    };
    this.addEvent = this.addEvent.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
  }

  componentDidMount() {
    this.props.getFunc(this.changeMonth);
  }

  changeMonth(direction) {
    const { activeMonth, months } = this.state;
    const currentIndex = months.indexOf(activeMonth);

    if (direction === 'forward' && currentIndex < 1) {
      this.setState({ activeMonth: months[currentIndex + 1] });
      this.props.getCurrentMonth(months[currentIndex + 1]);
    }

    if (direction === 'back' && currentIndex > 0) {
      this.setState({ activeMonth: months[currentIndex - 1] });
      this.props.getCurrentMonth(months[currentIndex - 1]);
    }
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
      const isWeekend = Calendar.addClass(calendarDay);

      return (
        <Day
          key={`${activeMonth}-${calendarDay}`}
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

Calendar.propTypes = {
  getFunc: PropTypes.func.isRequired,
  getCurrentMonth: PropTypes.func.isRequired,
};

export default Calendar;
