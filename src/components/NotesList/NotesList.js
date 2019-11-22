import React from 'react';

import { Container } from './styles';
import Note from '../Note/Note';

export default function NoteList() {
  return (
    <Container>
      <Note name="Articles Ideas" />
      <Note name="Back on track" />
      <Note name="Grocery list" />
    </Container>
  );
}
