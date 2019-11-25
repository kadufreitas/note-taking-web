import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';
import { Container, TagsList } from './styles';

export default function Note({ title, text, handleSelectNote }) {
  return (
    <Container onClick={handleSelectNote}>
      <h5>{title}</h5>
      <p>{text}</p>
      <TagsList>
        <Tag />
      </TagsList>
    </Container>
  );
}
Note.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleSelectNote: PropTypes.func.isRequired,
};
