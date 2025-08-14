import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
<div>
  <Link to="/">
    <img src="/logo.png" alt="Akar & Asa" className="header-logo" />
  </Link>
</div>
      <nav>
        <Link to="/collection">COLLECTIONS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/shop">SHOP</Link>
      </nav>
    </header>
  );
};
export default Header;