import React from 'react';
import PropTypes from 'prop-types';
import DayHeaders from './DayHeaders';

import './styles/App.css';

const Header = ({ changeMonth }) => (
  <header>
    <nav className="nav">
      <button onClick={() => changeMonth('back')}>
        Prev.
      </button>
      <button onClick={() => changeMonth('forward')}>
        Next
      </button>
    </nav>
    <h1>October</h1>
    <DayHeaders />
  </header>
);

Header.propTypes = {
  changeMonth: PropTypes.func.isRequired,
};

export default Header;
