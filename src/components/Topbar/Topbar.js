import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa';
import SearchInput from '../SearchInput/SearchInput';
import { Container, CreateButton } from './styles';

import { logout } from '../../services/auth';

function Topbar({ handleCreateNote, handleSearchNote, searchText, history }) {
  const handleSignOut = e => {
    e.preventDefault();
    logout();
    history.push('/');
  };

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
      <div className="flex-right">
        <button
          type="button"
          className="default-button"
          onClick={handleSignOut}
        >
          <FaSignOutAlt />
        </button>
      </div>
    </Container>
  );
}

Topbar.propTypes = {
  handleCreateNote: PropTypes.func.isRequired,
  handleSearchNote: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Topbar);
