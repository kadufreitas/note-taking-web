import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tag({ name, color }) {
  return <Container color={color}>{name}</Container>;
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
