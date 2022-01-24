import React from 'react';
import { LogoWrapper, Nav } from './styles';
import logo from '../../assets/logo.png';
import logoTitle from '../../assets/cowala-Software.png';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <LogoWrapper>
        <img src={logo} alt="Cowala Logo" />
        <img src={logoTitle} alt="Cowala Software" />
      </LogoWrapper>
    </Nav>
  );
};

export default Navbar;
