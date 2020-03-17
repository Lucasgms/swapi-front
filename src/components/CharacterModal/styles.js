import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, .5);
`;

export const ModalDialog = styled.div`
  width: 50%;
  height: 80%;
  margin: 5% auto;
  background: #FFF;
  border-radius: 5px;
  padding: 16px;

  .row {
    width: 100%;
    display: flex;
  }
`;

export const ModalCloseStyled = styled.button`
  margin-left: auto;
  position: relative;
  width: 50px;
  height: 50px;
  font-size: 36px;
  line-height: 50px;
  border: none;
  color: #D0DDEA;
  background-color: #FFF;
  cursor: pointer;

  &:before {
    content: '';
    height: 30px;
    width: 2px;
    background: #D0DDEA;
    position: absolute;
    right: 25px;
    top: 10px;
    transform: rotate(45deg);
  }

  &:after {
    content: '';
    height: 30px;
    width: 2px;
    background: #D0DDEA;
    position: absolute;
    right: 25px;
    top: 10px;
    transform: rotate(-45deg);
  }
`;

export const TitleStyled = styled.h1`
  width: 100%;
  margin: 16px 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

export const FieldStyled = styled.div`
  flex: 1;
  margin: 12px 0;
  text-align: center;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #7C92AB;
  }

  span {
    color: #30455C;
    font-weight: 600;
  }
`;