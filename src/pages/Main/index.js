import React from 'react';

import { NoteEditor, Notelist, Sidebar, Topbar } from '../../components';
import { Container, Wrapper, Row } from './styles';

import api from '../../services/api';
import FormTag from '../../components/FormTag/FormTag';

const WAIT_INTERVAL = 500;

export default function Main() {
  const [notes, setNotes] = React.useState([]);
  const [noteSelected, setNoteSelected] = React.useState({
    title: '',
    text: '',
    tags: [],
  });
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [tagSelected, setTagSelected] = React.useState(null);
  const [timer, setTimer] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  const [showFormFlag, setShowFormFlag] = React.useState(false);

  async function fetchTags() {
    let response = null;
    response = await api.get(`tags/`);

    setTags(response.data);
  }

  React.useEffect(() => {
    fetchTags();
  }, []);

  async function fetchData() {
    setLoading(true);
    let query = '';
    if (searchText) {
      query += `&search=${searchText}`;
    }
    if (tagSelected) {
      query += `&tag=${tagSelected}`;
    }
    const response = await api.get(`notes-list/?${query}`);
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
      tags: [],
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
          tags: noteSelected.tags.map(tag => tag.id),
        });
      } else {
        const response = await api.post(`notes/`, {
          client: 1,
          title: noteSelected.title,
          text: noteSelected.text,
          tags: noteSelected.tags.map(tag => tag.id),
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
    setNoteSelected({ ...noteSelected, [field]: e.target.value, edit: true });
  };

  const handleSearchNote = e => {
    setSearchText(e.target.value);
  };

  const handleSearchNoteByTag = id => {
    if (id) {
      setTagSelected(id);
      // return;
    }
    // setTagSelected(null);
  };

  const handleClearFilters = () => {
    setSearchText('');
    setTagSelected(null);
    // fetchData();
  };

  const handleAddTag = async tag => {
    try {
      await api.post(`tags/`, tag);
      fetchTags();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTagToNote = tagId => {
    const currentTag = tags.filter(tag => tag.id === parseInt(tagId, 10));
    console.log(currentTag);
    // const newTags = noteSelected.tags.push(tag);
    // setNoteSelected({ ...noteSelected, tags: newTags, edit: true });
  };

  const handleToggleForm = e => {
    e.preventDefault();
    setShowFormFlag(!showFormFlag);
  };

  React.useEffect(() => {
    if (searchText) {
      clearTimeout(timer);
      setTimer(setTimeout(() => fetchData(), WAIT_INTERVAL));
    } else {
      fetchData();
    }
  }, [searchText]);

  React.useEffect(() => {
    fetchData();
  }, [tagSelected]);

  React.useEffect(() => {
    if (noteSelected.title && noteSelected.edit) {
      console.log(timer);
      clearTimeout(timer);
      setTimer(setTimeout(handleSaveNote, WAIT_INTERVAL));
    }
  }, [noteSelected]);

  return (
    <Container>
      <Sidebar
        handleSearchNoteByTag={handleSearchNoteByTag}
        handleClearFilters={handleClearFilters}
        handleToggleForm={handleToggleForm}
        tags={tags}
      />
      <Wrapper>
        <Topbar
          handleCreateNote={handleCreateNote}
          handleSearchNote={handleSearchNote}
          searchText={searchText}
        />
        <Row>
          <Notelist notes={notes} handleSelectNote={handleSelectNote} />
          <NoteEditor
            noteToEdit={noteSelected}
            handleEditeField={handleEditeField}
            tags={noteSelected.tags}
            allTags={tags}
            handleAddTagToNote={handleAddTagToNote}
          />
        </Row>
      </Wrapper>
      <FormTag
        showProp={showFormFlag}
        handleAddTag={handleAddTag}
        handleToggleForm={handleToggleForm}
      />
    </Container>
  );
}
