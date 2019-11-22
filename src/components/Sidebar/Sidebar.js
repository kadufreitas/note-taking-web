import React from 'react';

import { FaStickyNote } from 'react-icons/fa';

import { Container, MenuSidebar, ItemMenu } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <h3>
        <FaStickyNote size={18} />
        Notetaking
      </h3>
      <MenuSidebar>
        <ItemMenu activate>All notes</ItemMenu>
        <ItemMenu>Tags</ItemMenu>
      </MenuSidebar>
    </Container>
  );
}
