import React from 'react';

import { FaPlus } from 'react-icons/fa';
import SearchInput from '../SearchInput/SearchInput';
import { Container, CreateButton } from './styles';

export default function Topbar() {
  return (
    <Container>
      <SearchInput />
      <CreateButton>
        <FaPlus />
        New Note
      </CreateButton>
    </Container>
  );
}
