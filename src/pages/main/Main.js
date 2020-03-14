import React from 'react';

import useCharactersList  from '~/hooks/CharactersList';
import CharactersList from '~/components/CharactersList';

const Main = () => {
  const [list] = useCharactersList();

  return (
    <CharactersList list={list} />
  );
};

export default Main;