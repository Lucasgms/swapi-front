import React, { useState } from 'react';

import Button from '~/components/button';

import {
  buttonStyled,
  CharacterFilterStyled,
  TitleStyled,
  FormStyled,
  InputBlockStyled,
} from './styles';

const CharacterFilter = () => {
  const [name, setName]  = useState('');
  const [gender, setGender]  = useState('');
  const [birthYear, setBirthYear]  = useState('');
  const buttonClass = 'primary';
  const buttonType = 'submit';

  return (
    <CharacterFilterStyled>
      <TitleStyled>Filtros</TitleStyled>
      <FormStyled action="">
        <InputBlockStyled className="input-block">
          <label htmlFor="name">Nome do personagem</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </InputBlockStyled>
        <InputBlockStyled className="input-block">
          <label htmlFor="gender">Gênero do personagem</label>
          <input
            name="gender"
            id="gender"
            value={gender}
            onChange={e => setGender(e.target.value)}
          />
        </InputBlockStyled>
        <InputBlockStyled className="input-block">
          <label htmlFor="birthYear">Ano de nascimento</label>
          <input
            name="birthYear"
            id="birthYear"
            value={birthYear}
            onChange={e => setBirthYear(e.target.value)}
          />
        </InputBlockStyled>
        <Button
          buttonClass={buttonClass}
          type={buttonType}
        >
          Filtrar
        </Button>
      </FormStyled>
    </CharacterFilterStyled>
  );
};


export default CharacterFilter;