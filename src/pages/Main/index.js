import React from 'react';

import { NoteEditor, Notelist, Sidebar, Topbar } from '../../components';
import { Container, Wrapper, Row } from './styles';

import api from '../../services/api';

const WAIT_INTERVAL = 500;

export default function Main() {
  const [notes, setNotes] = React.useState([]);
  const [noteSelected, setNoteSelected] = React.useState({
    title: '',
    text: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [timer, setTimer] = React.useState(null);

  async function fetchData() {
    setLoading(true);
    const response = await api.get(`notes-list/`);
    setNotes(response.data);
    setLoading(false);
  }

  const handleSelectNote = note => {
    setNoteSelected(note);
  };

  const handleCreateNote = () => {
    setNoteSelected({
      title: '',
      text: '',
    });
  };

  const handleSaveNote = async () => {
    setLoading(true);
    try {
      if (noteSelected.id) {
        await api.put(`notes/${noteSelected.id}/`, {
          client: 1,
          title: noteSelected.title,
          text: noteSelected.text,
          tags: [1],
        });
      } else {
        const response = await api.post(`notes/`, {
          client: 1,
          title: noteSelected.title,
          text: noteSelected.text,
          tags: [1],
        });
        setNoteSelected(response.data);
      }
      setLoading(false);
      fetchData();
    } catch (error) {
      // TODO:
      // - Show error modal
      setLoading(false);
    }
  };
  const handleEditeField = (e, field) => {
    setNoteSelected({ ...noteSelected, [field]: e.target.value });
    console.log(timer);
    clearTimeout(timer);
    setTimer(setTimeout(handleSaveNote, WAIT_INTERVAL));
  };

  React.useEffect(() => {
    fetchData();
  }, [searchText]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Topbar handleCreateNote={handleCreateNote} />
        <Row>
          <Notelist notes={notes} handleSelectNote={handleSelectNote} />
          <NoteEditor
            noteToEdit={noteSelected}
            handleEditeField={handleEditeField}
          />
        </Row>
      </Wrapper>
    </Container>
  );
}
