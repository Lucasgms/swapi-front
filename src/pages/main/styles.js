import styled from 'styled-components';

export const MainStyled = styled.div`
  margin: 32px 0; 
  padding: 0 32px;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 400px auto;
  grid-column-gap: 16px;
  grid-template-areas:
    "filter list"
    ". list";
`;