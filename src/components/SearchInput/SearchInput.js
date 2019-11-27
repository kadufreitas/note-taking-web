import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

export default function SearchInput({ handleSearchNote, searchText }) {
  return (
    <Input
      onChange={handleSearchNote}
      value={searchText}
      type="text"
      name="searchText"
      placeholder="Search"
    />
  );
}

SearchInput.propTypes = {
  handleSearchNote: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
