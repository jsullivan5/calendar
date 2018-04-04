import React from 'react';
import Event from './Event';
import AddEvent from './AddEvent';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
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

  toggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const dailyEvents = this.generateEvents();

    return (
      <div
        className={`day ${this.props.weekend ? 'weekend' : null}`}
        onClick={this.props.toggleModal}
      >
        {this.state.showModal &&
        <AddEvent />}
        <p>{this.props.day}</p>
        {dailyEvents}
      </div>
    );
  }
}

export default Day;
