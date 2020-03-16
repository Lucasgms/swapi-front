import React from 'react';

import useCharactersList  from '~/hooks/CharactersList';
import CharactersList from '~/components/CharactersList';
import CharacterFilter from '~/components/CharacterFilter';

import { MainStyled } from './styles';

const Main = () => {
  const [list, count, pageInfo, isLoading, getMore] = useCharactersList();

  const loadMoreCharacters = () => {
    getMore(10, pageInfo.endCursor);
  }

  return (
    <MainStyled>
      <CharacterFilter />
      <CharactersList
        list={list}
        hasNext={pageInfo.hasNextPage}
        loadCharacters={loadMoreCharacters}
        isLoading={isLoading}
      />
    </MainStyled>
  );
};

export default Main;