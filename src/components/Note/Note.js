import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import { Container, TagsList } from './styles';

export default function Note({ name }) {
  return (
    <Container>
      <h5>{name}</h5>
      <p>
        Today marks what would have been the 100th birthday of the leading
        Danish architect, jorn{' '}
      </p>
      <TagsList>
        <Tag />
      </TagsList>
    </Container>
  );
}
Note.propTypes = {
  name: PropTypes.string.isRequired,
};
