import React from 'react';
import PropTypes from 'prop-types';
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.openModal();
    }
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
        role="button"
        tabIndex={this.props.day}
        onKeyPress={this.handleKeyPress}
      >
        {this.state.showModal &&
          <AddEvent
            addEvent={this.props.addEvent}
            closeModal={this.closeModal}
            calendarDay={this.props.day}
          />}
        <p>{this.props.day}</p>
        {dailyEvents}
      </div>
    );
  }
}

Day.propTypes = {
  events: PropTypes.array.isRequired,
  addEvent: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  weekend: PropTypes.bool.isRequired,
};

export default Day;
