import React from 'react';

import { ButtonStyled } from './styles';

const Button = ({buttonClass, children, type = 'button'}) => {
  return (
    <ButtonStyled
      className={buttonClass}
      type={type}
    >
      {children}
    </ButtonStyled>);
};

export default Button;