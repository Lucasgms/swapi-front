import React from 'react';
import debounce from "lodash.debounce";

import CharacterCard from '~/components/CharacterCard';

import {ListStyled} from './styles'; 

const CharactersList = ({list, hasNext, loadCharacters}) => {

  window.onscroll = debounce(() => {
    if (
      hasNext &&
      (window.innerHeight + window.scrollY)
      === document.body.scrollHeight
    ) {
      loadCharacters();
    }
  }, 250);

  return (
    <ListStyled>
       {list.map(char => (
          <CharacterCard
            key={char.id}
            character={char}
          />
        ))}
    </ListStyled>
  );
};

export default CharactersList;