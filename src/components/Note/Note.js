import React from 'react';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function Note({ name }) {
  return (
    <div>
      <h5>{name}</h5>
    </div>
  );
}
Note.propTypes = {
  name: PropTypes.string.isRequired,
};
