import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addEvent, closeModal, calendarDay } = this.props;
    const eventInfo = this.state;

    addEvent(calendarDay, eventInfo);
    closeModal();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="add-event-container">
        <form onSubmit={this.handleSubmit} className="add-event-form">
          <label htmlFor="name">
            Event Name
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label htmlFor="start">
            Start Time
            <input
              id="start"
              type="text"
              name="start"
              onChange={this.handleChange}
              value={this.state.start}
            />
          </label>
          <label htmlFor="end">
            End Time
            <input
              id="end"
              type="text"
              name="end"
              onChange={this.handleChange}
              value={this.state.end}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddEvent;
