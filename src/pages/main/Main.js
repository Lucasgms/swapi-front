import React from 'react';

import useCharactersList  from '~/hooks/CharactersList';
import CharactersList from '~/components/CharactersList';
import CharacterFilter from '~/components/CharacterFilter';

import { MainStyled } from './styles';

const Main = () => {
  const [
    list,
    count,
    pageInfo,
    isLoading,
    getMore,
    setFilters,
  ] = useCharactersList();

  function loadMoreCharacters() {
    getMore(10, pageInfo.endCursor);
  }

  async function handleFilter(data) {
    setFilters(data);
  }

  return (
    <MainStyled>
      <CharacterFilter onSubmit={handleFilter} />
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