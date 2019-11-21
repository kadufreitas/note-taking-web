import React from 'react';

import { NoteEditor, Notelist, Sidebar, Topbar } from '../../components';
import { Container, Wrapper } from './styles';

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Topbar />
        <Container>
          <Notelist />
          <NoteEditor />
        </Container>
      </Wrapper>
    </Container>
  );
}
