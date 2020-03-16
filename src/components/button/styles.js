import styled from 'styled-components';

const primaryColor = '#FFE81F';
const blackColor = '#000';

export const ButtonStyled = styled.button`
  position: relative;

  min-height: 40px;
  min-width: 120px;
  margin: 16px 0;
  padding: 0 20px;

  border: 2px solid ${primaryColor};
  border-radius: 4px;

  color: ${blackColor};
  background-color: ${primaryColor};
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.1);

  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: ${primaryColor};
    background-color: ${blackColor};
    border-color: ${blackColor};
    box-shadow: 2px 2px 16px 0 rgba(0,0,0,0.15);
  }


`;