import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, TextArea } from './styles';

export default function NoteEditor({ noteToEdit, handleEditeField }) {
  return (
    <Container>
      <div>
        <Input
          type="text"
          name="title"
          value={noteToEdit.title}
          maxLength="100"
          onChange={e => handleEditeField(e, 'title')}
          placeholder="Deixe aqui o titulo da sua nota"
        />
      </div>
      <div>
        <TextArea
          name="text"
          value={noteToEdit.text}
          onChange={e => handleEditeField(e, 'text')}
          placeholder="Aqui você pode escrever mais detalhes sobre ela."
        />
      </div>
    </Container>
  );
}

NoteEditor.propTypes = {
  noteToEdit: PropTypes.objectOf(PropTypes.any).isRequired,
  handleEditeField: PropTypes.func.isRequired,
};
