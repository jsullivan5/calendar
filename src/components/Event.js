import React from 'react';
import PropTypes from 'prop-types';

const Event = props => (
  <div>
    <p>{props.name}</p>
  </div>
);

Event.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Event;
