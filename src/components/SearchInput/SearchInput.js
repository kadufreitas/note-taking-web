import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

export default function SearchInput({ handleSearchNote }) {
  return (
    <Input
      onChange={handleSearchNote}
      type="text"
      name="searchText"
      placeholder="Search"
    />
  );
}

SearchInput.propTypes = {
  handleSearchNote: PropTypes.func.isRequired,
};
