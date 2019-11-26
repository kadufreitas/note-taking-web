import React from 'react';
import PropTypes from 'prop-types';

import { FaStickyNote, FaCircle } from 'react-icons/fa';
import api from '../../services/api';

import { Container, MenuSidebar, ItemMenu, TagsList, Tag } from './styles';

export default function Sidebar({ handleSearchNoteByTag }) {
  const [tags, setTags] = React.useState([]);

  async function fetchTags() {
    let response = null;
    response = await api.get(`tags/`);

    setTags(response.data);
  }
  React.useEffect(() => {
    fetchTags();
  }, [tags]);

  return (
    <Container>
      <h3>
        <FaStickyNote size={18} />
        Notetaking
      </h3>
      <MenuSidebar>
        <ItemMenu activate onClick={() => handleSearchNoteByTag()}>
          All notes
        </ItemMenu>
        <ItemMenu>
          Tags
          <TagsList>
            {tags.map(tag => (
              <Tag
                key={tag.id}
                color="green"
                onClick={() => handleSearchNoteByTag(tag.id)}
              >
                <FaCircle />
                {tag.name}
              </Tag>
            ))}
          </TagsList>
        </ItemMenu>
      </MenuSidebar>
    </Container>
  );
}

Sidebar.propTypes = {
  handleSearchNoteByTag: PropTypes.func.isRequired,
};
