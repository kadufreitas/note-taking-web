import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, TextArea } from './styles';
import Bottombar from '../Bottombar/Bottombar';

export default function NoteEditor({
  noteToEdit,
  handleEditeField,
  tags,
  allTags,
  handleAddTagToNote,
  handleDeleteNote,
}) {
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
      <div className="text-area">
        <TextArea
          name="text"
          value={noteToEdit.text}
          onChange={e => handleEditeField(e, 'text')}
          placeholder="Aqui você pode escrever mais detalhes sobre ela."
        />
      </div>
      <Bottombar
        tags={tags}
        allTags={allTags}
        handleAddTagToNote={handleAddTagToNote}
        handleDeleteNote={handleDeleteNote}
        noteId={noteToEdit.id}
      />
    </Container>
  );
}

NoteEditor.defaultProps = {
  tags: [],
  allTags: [],
};

NoteEditor.propTypes = {
  noteToEdit: PropTypes.objectOf(PropTypes.any).isRequired,
  handleEditeField: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.any),
  allTags: PropTypes.arrayOf(PropTypes.any),
  handleAddTagToNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};
