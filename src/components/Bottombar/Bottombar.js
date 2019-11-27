import React from 'react';
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search';

import { FaPlus, FaTrash } from 'react-icons/fa';
import Tag from '../Tag/Tag';
import { Container, OptionButton, TagsList } from './styles';

export default function Bottombar({ tags, allTags, handleAddTagToNote }) {
  // const options = [
  //   { name: 'Swedish', value: 'sv' },
  //   { name: 'English', value: 'en' },
  // ];
  const normalizeTags = allTags.map(tag => ({
    name: tag.name,
    value: String(tag.id),
  }));
  const [tagSelected, setTagSelected] = React.useState(null);

  return (
    <Container>
      <TagsList>
        {tags.map(tag => (
          <Tag
            key={tag.id}
            name={tag.name}
            color={tag.color}
            readOnly={false}
            mr10
          />
        ))}
        {/* <SelectSearch
          options={normalizeTags}
          name="language"
          placeholder="Select a tag"
          onChange={value => {
            setTagSelected(value.value);
          }}
        />
        <OptionButton onClick={() => handleAddTagToNote(tagSelected)}>
          <FaPlus />
        </OptionButton> */}
      </TagsList>
      <OptionButton>
        <FaTrash />
      </OptionButton>
    </Container>
  );
}

Bottombar.defaultProps = {
  tags: [],
  allTags: [],
};

Bottombar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any),
  handleAddTagToNote: PropTypes.func.isRequired,
  allTags: PropTypes.arrayOf(PropTypes.any),
};
