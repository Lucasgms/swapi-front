import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 16px 32px;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleStyled = styled.h2`
  color: #FFE81F;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
`;

export const PaginationCounterStyled = styled.p`
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const ListStyled = styled.div`
  width: 100%;
  margin: 16px 0;
  grid-area: list;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

