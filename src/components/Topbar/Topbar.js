import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import SearchInput from '../SearchInput/SearchInput';
import { Container, CreateButton } from './styles';

export default function Topbar({
  handleCreateNote,
  handleSearchNote,
  searchText,
}) {
  return (
    <Container>
      <SearchInput
        handleSearchNote={handleSearchNote}
        searchText={searchText}
      />
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
  searchText: PropTypes.string.isRequired,
};
