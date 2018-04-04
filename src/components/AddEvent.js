import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-event">
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
        <label htmlFor="description">
          Event Description
          <input
            id="description"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
      </form>
    );
  }
}

export default AddEvent;
