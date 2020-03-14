import React from 'react';

import { ButtonStyled } from './styles';

const Button = (props) => {
  const { type } = props;
  
  return (<ButtonStyled primary={type}>{props.children}</ButtonStyled>);
};

export default Button;