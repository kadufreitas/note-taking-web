import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, ColorsList, Option } from './styles';

const ENTER_KEY = 13;

export default function TagInput({ handleAddTag }) {
  const [colors, setColors] = React.useState([
    {
      hex: '#F57C00',
      selected: false,
    },
    {
      hex: '#4CAF50',
      selected: false,
    },
    {
      hex: '#303F9F',
      selected: false,
    },
    {
      hex: '#FF5252',
      selected: false,
    },
  ]);
  const [newTag, setNewTag] = React.useState({
    name: '',
    color: '',
  });

  const setName = e => {
    setNewTag({
      ...newTag,
      name: e.target.value,
    });
  };

  const setSelected = hex => {
    const newColors = colors.map(element => {
      element.selected = element.hex === hex; // eslint-disable-line no-param-reassign
      return element;
    });
    setColors(newColors);
  };

  const setColor = color => {
    setNewTag({
      ...newTag,
      color,
    });
    setSelected(color);
  };

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      handleAddTag(newTag);
    }
  };

  return (
    <Container>
      <ColorsList>
        {colors.map(color => (
          <Option
            key={color.hex}
            color={color.hex}
            onClick={() => setColor(color.hex)}
            isSelected={color.selected}
          />
        ))}
      </ColorsList>
      <Input
        onChange={setName}
        onKeyDown={handleKeyDown}
        // value={tagName}
        type="text"
        name="searchText"
        placeholder="Type enter to save"
      />
    </Container>
  );
}

TagInput.propTypes = {
  handleAddTag: PropTypes.func.isRequired,
};
