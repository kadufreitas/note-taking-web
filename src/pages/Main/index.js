import React from 'react';

import { NoteEditor, Notelist, Sidebar, Topbar } from '../../components';
import { Container, Wrapper, Row } from './styles';

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Topbar />
        <Row>
          <Notelist />
          <NoteEditor />
        </Row>
      </Wrapper>
    </Container>
  );
}
