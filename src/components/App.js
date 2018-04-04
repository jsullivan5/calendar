import React, { Component } from 'react';
import Header from './Header';
import Calendar from './Calendar';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      changeMonth: () => null,
    };
    this.getFunc = this.getFunc.bind(this);
  }
  getFunc(func) {
    this.setState({ changeMonth: func });
  }

  render() {
    return (
      <div className="App">
        <Header changeMonth={this.state.changeMonth} />
        <Calendar getFunc={this.getFunc} />
      </div>
    );
  }
}

export default App;
