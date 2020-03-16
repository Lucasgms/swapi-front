import React, { useState } from 'react';

import Button from '~/components/button';

import {
  buttonStyled,
  CharacterFilterStyled,
  TitleStyled,
  FormStyled,
  InputBlockStyled,
  SelectStyled,
} from './styles';

const CharacterFilter = () => {
  const [name, setName]  = useState('');
  const [gender, setGender]  = useState('');
  const [birthYear, setBirthYear]  = useState('');
  const buttonClass = 'primary';
  const buttonType = 'submit';

  const genders = ['Male', 'Female', 'unknown', 'n/a'];

  return (
    <CharacterFilterStyled>
      <TitleStyled>Filters</TitleStyled>
      <FormStyled action="">
        <InputBlockStyled className="input-block">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            autocomplete="off"
          />
        </InputBlockStyled>
        <InputBlockStyled className="input-block">
          <label htmlFor="gender">Gender:</label>
          <SelectStyled
            name="gender"
            id="gender"
          >
            {genders.map((gender, index) => (
              <option key={index} value={gender}>{gender}</option>
            ))}
          </SelectStyled>
        </InputBlockStyled>
        <InputBlockStyled className="input-block">
          <label htmlFor="birthYear">Birth Year:</label>
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
          Filter
        </Button>
      </FormStyled>
    </CharacterFilterStyled>
  );
};


export default CharacterFilter;