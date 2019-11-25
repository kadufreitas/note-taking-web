import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import SearchInput from '../SearchInput/SearchInput';
import { Container, CreateButton } from './styles';

export default function Topbar({ handleCreateNote }) {
  return (
    <Container>
      <SearchInput />
      <CreateButton onClick={handleCreateNote}>
        <FaPlus />
        New Note
      </CreateButton>
    </Container>
  );
}

Topbar.propTypes = {
  handleCreateNote: PropTypes.func.isRequired,
};
