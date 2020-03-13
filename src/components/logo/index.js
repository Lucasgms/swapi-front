import React from 'react';
import LogoSvg from '~/logo.svg';

import { LogoStyled } from './styles';

const Logo = () => (
  <LogoStyled src={LogoSvg} alt="Logo Star Wars"/>
);

export default Logo;