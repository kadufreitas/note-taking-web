import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus, FaTrash } from 'react-icons/fa';
import { Container, OptionButton } from './styles';

export default function Bottombar() {
  return (
    <Container>
      <OptionButton>
        <FaPlus />
        Add Tag
      </OptionButton>
      <OptionButton>
        <FaTrash />
      </OptionButton>
    </Container>
  );
}

// Bottombar.propTypes = {
//   handleCreateNote: PropTypes.func.isRequired,
//   handleSearchNote: PropTypes.func.isRequired,
// };
