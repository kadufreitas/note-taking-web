import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tag({ name, color, readOnly }) {
  return (
    <Container className="tag" color={color}>
      <span>{name}</span>
      {!readOnly && <span className="tag-close-icon">x</span>}
    </Container>
  );
}

Tag.defaultProps = {
  readOnly: true,
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
};
