import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #FFF;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, .2);
`;

export const CardMainText = styled.p`
  margin: 16px 0;

  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #000; 
`;

export const CardText = styled.p`
  margin: 8px 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000;
`;

export const CardLabel = styled.span`
  font-weight: 600;
`;

export const MoviesList = styled(CardText)`
  height: 72px;
  width: 75%;
  margin: 0 auto;
  text-align: center;
`;