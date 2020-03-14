import React from 'react';

import CharacterCard from '~/components/CharacterCard';
import {ListStyled} from './styles'; 

const CharactersList = (props) => {
  const { list } = props;

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