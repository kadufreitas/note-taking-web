import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';
import { Container, TagsList } from './styles';

export default function Note({ title, text, tags, handleSelectNote }) {
  return (
    <Container onClick={handleSelectNote}>
      <h5>{title}</h5>
      <p>{text}</p>
      <TagsList>
        {tags.map(tag => (
          <Tag key={tag.id} name={tag.name} color="blue" />
        ))}
      </TagsList>
    </Container>
  );
}
Note.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleSelectNote: PropTypes.func.isRequired,
};
