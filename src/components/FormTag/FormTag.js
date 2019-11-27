import React from 'react';
import PropTypes from 'prop-types';

import { Container, Close, Overlay, Form } from './styles';

import TagInput from '../TagInput/TagInput';

export default function FormTag({ showProp, handleAddTag, handleToggleForm }) {
  return (
    <Form show={showProp}>
      <Overlay onClick={handleToggleForm} />
      <Container>
        <Close onClick={handleToggleForm}>X</Close>
        <div>
          <h3>Create a new tag</h3>
        </div>
        <div>
          <TagInput handleAddTag={handleAddTag} />
        </div>
      </Container>
    </Form>
  );
}

FormTag.propTypes = {
  handleAddTag: PropTypes.func.isRequired,
  handleToggleForm: PropTypes.func.isRequired,
  showProp: PropTypes.bool.isRequired,
};
