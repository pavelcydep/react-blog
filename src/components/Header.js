import React from 'react';
import logo from '../image/logo.svg';
function Header() {
  return (
    
    <header className="header root__section">
    <img src={logo} alt="mesto logo" className="logo"></img>
  </header>

    
  );
}
  
export default Header;