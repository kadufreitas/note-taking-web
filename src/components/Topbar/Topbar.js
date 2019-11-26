import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import SearchInput from '../SearchInput/SearchInput';
import { Container, CreateButton } from './styles';

export default function Topbar({ handleCreateNote, handleSearchNote }) {
  return (
    <Container>
      <SearchInput handleSearchNote={handleSearchNote} />
      <CreateButton onClick={handleCreateNote}>
        <FaPlus />
        New Note
      </CreateButton>
    </Container>
  );
}

Topbar.propTypes = {
  handleCreateNote: PropTypes.func.isRequired,
  handleSearchNote: PropTypes.func.isRequired,
};
