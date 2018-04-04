import React from 'react';
import Event from './Event';
import AddEvent from './AddEvent';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
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

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const dailyEvents = this.generateEvents();

    return (
      <div
        className={`day ${this.props.weekend ? 'weekend' : null}`}
        onClick={this.openModal}
      >
        {this.state.showModal &&
          <AddEvent
            addEvent={this.props.addEvent}
            closeModal={this.closeModal}
          />}
        <p>{this.props.day}</p>
        {dailyEvents}
      </div>
    );
  }
}

export default Day;
