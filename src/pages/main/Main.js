import React, {useState} from 'react';

import useCharactersList  from '../../hooks/CharactersList';
import CharactersList from '../../components/CharactersList';
import CharacterFilter from '../../components/CharacterFilter';
import CharacterModal from '../../components/CharacterModal';

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

  const [characterId, setCharacterId] = useState('');

  function loadMoreCharacters() {
    getMore(10, pageInfo.endCursor);
  }

  async function handleFilter(data) {
    setFilters(data);
  }

  function goToDetails(id) {
    setCharacterId(id);
  }

  function closeDialog() {
    setCharacterId('');
  }

  return (
    <MainStyled>
      <CharacterFilter onSubmit={handleFilter} />
      <CharactersList
        count={count}
        list={list}
        hasNext={pageInfo.hasNextPage}
        loadCharacters={loadMoreCharacters}
        isLoading={isLoading}
        onClickDetails={goToDetails}
      />
      {characterId && 
       <CharacterModal
        id={characterId}
        onClose={closeDialog}
      />
      }
    </MainStyled>
  );
};

export default Main;