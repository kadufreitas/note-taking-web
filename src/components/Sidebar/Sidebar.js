import React from 'react';

import { FaStickyNote } from 'react-icons/fa';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <h3>
        <FaStickyNote />
        Notetaking
      </h3>
      <ul>
        <li>All notes</li>
        <li>Tags</li>
      </ul>
    </Container>
  );
}
