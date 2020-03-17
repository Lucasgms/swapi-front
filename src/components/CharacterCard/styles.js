import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  background: #FFF;
  border: 5px solid transparent;
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.1);

  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 24px 0 rgba(0,0,0,0.2);
    border-color: #FFE81F;  
  }
`;

export const CardMainText = styled.p`
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
  color: #D0DDEA;
`;

export const CardLabel = styled.span`
  font-weight: 600;
`;

export const MoviesList = styled(CardText)`
  height: 96px;
  margin: 0;
  text-align: left;
  color: #D0DDEA;
`;