import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Note from '../Note/Note';

export default function NoteList({ notes, handleSelectNote }) {
  return (
    <Container>
      {notes.map(note => (
        <Note
          title={note.title}
          text={note.text}
          key={note.id}
          handleSelectNote={() => handleSelectNote(note)}
        />
      ))}
    </Container>
  );
}

NoteList.defaultProps = {
  notes: [],
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  handleSelectNote: PropTypes.func.isRequired,
};
