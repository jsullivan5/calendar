import React, { Component } from 'react';
import Header from './Header';
import Calendar from './Calendar';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calendar />
      </div>
    );
  }
}

export default App;
