import React from 'react';
import LogoSvg from '~/logo.svg';

import { HeaderStyled, LogoStyled } from './styles';

const Header = () => (
  <HeaderStyled>
    <LogoStyled src={LogoSvg} alt="Logo Star Wars"/>
  </HeaderStyled>
);

export default Header;