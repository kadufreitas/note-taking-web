import React from 'react';
import PropTypes from 'prop-types';

import { FaStickyNote, FaCircle, FaPlus } from 'react-icons/fa';

import { Container, MenuSidebar, ItemMenu, TagsList, Tag } from './styles';

export default function Sidebar({
  tags,
  handleSearchNoteByTag,
  handleClearFilters,
  handleToggleForm,
}) {
  return (
    <Container>
      <h3>
        <FaStickyNote size={18} />
        Notetaking
      </h3>
      <MenuSidebar>
        <ItemMenu activate onClick={() => handleClearFilters()}>
          All notes
        </ItemMenu>
        <ItemMenu>
          <div className="tags-title">
            Tags
            <button
              type="button"
              onClick={handleToggleForm}
              className="default-button default-button__small"
            >
              <FaPlus />
            </button>
          </div>
          <TagsList>
            {tags.map(tag => (
              <Tag
                key={tag.id}
                color={tag.color}
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
Sidebar.defaultProps = {
  tags: [],
};

Sidebar.propTypes = {
  handleSearchNoteByTag: PropTypes.func.isRequired,
  handleClearFilters: PropTypes.func.isRequired,
  handleToggleForm: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.any),
};
