import React from 'react';
import debounce from "lodash.debounce";

import CharacterCard from '~/components/CharacterCard';

import {
  ContainerStyled,
  ListStyled,
  TitleStyled,
  PaginationCounterStyled,
} from './styles'; 

const CharactersList = ({count, list, hasNext, loadCharacters}) => {

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
    <ContainerStyled>
      <div className="row">
        <TitleStyled>Characters</TitleStyled>
        <PaginationCounterStyled>
          Showing {list.length} of <b>{count}</b>
        </PaginationCounterStyled>
      </div>
      <ListStyled>
        {list.map(char => (
            <CharacterCard
              key={char.id}
              character={char}
            />
          ))}
      </ListStyled>
    </ContainerStyled>
  );
};

export default CharactersList;