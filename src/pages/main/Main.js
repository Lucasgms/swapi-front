import React from 'react';

import useCharactersList  from '~/hooks/CharactersList';
import CharactersList from '~/components/CharactersList';

const Main = () => {
  const [list, count, pageInfo, isLoading, getMore] = useCharactersList();

  const loadMoreCharacters = () => {
    getMore(10, pageInfo.endCursor);
  }


  return (
    <CharactersList
      list={list}
      hasNext={pageInfo.hasNextPage}
      loadCharacters={loadMoreCharacters}
      isLoading={isLoading}
    />
  );
};

export default Main;