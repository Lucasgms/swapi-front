import styled from 'styled-components';

import Button from '~/components/button';

export const CharacterFilterStyled = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 5px;

  background: #FFF;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, .2);
  border: 8px solid #FFE81F; 

  button {
    width: 100%;
    margin-top: 32px;
  }
`;

export const TitleStyled = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
`;

export const FormStyled = styled.form`
  margin-top: 32px;
`;

export const InputBlockStyled = styled.div`
  + .input-block {
    margin-top: 20px;
  }

  label {
    color: #7C92AB;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input,
  select {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #30455C;
    border: 0;
    border-bottom: 1px solid #EEE;
  }
`;

export const SelectStyled = styled.select`
  display: block;
  background-color: #FFF;
  color: #30455C;
  border-radius: 0;
`;