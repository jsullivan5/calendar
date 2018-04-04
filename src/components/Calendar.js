import React from 'react';
import Day from './Day';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      days: [],
    };
  }
  componentDidMount() {
    this.renderCal();
  }

  renderCal() {
    const dayCount = 42;
    const daysArr = [];

    for (let i = 0; i < dayCount; i += 1) {
      daysArr.push(<Day day={i} />);
    }

    this.setState({ days: daysArr });
  }

  render() {
    return (
      <main className="grid">
        {this.state.days}
      </main>
    );
  }
}

export default Calendar;
