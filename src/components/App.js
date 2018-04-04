import React, { Component } from 'react';
import Header from './Header';
import Calendar from './Calendar';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      changeMonth: () => null,
      currentMonth: 'October',
    };
    this.getFunc = this.getFunc.bind(this);
    this.getCurrentMonth = this.getCurrentMonth.bind(this);
  }
  getFunc(func) {
    this.setState({ changeMonth: func });
  }

  getCurrentMonth(currentMonth) {
    this.setState({ currentMonth });
  }

  render() {
    return (
      <div className="App">
        <Header
          changeMonth={this.state.changeMonth}
          currentMonth={this.state.currentMonth}
        />
        <Calendar
          getFunc={this.getFunc}
          getCurrentMonth={this.getCurrentMonth}
        />
      </div>
    );
  }
}

export default App;
