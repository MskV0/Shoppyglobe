import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      {/* 🔗 Logo: icon + text on left side */}
      <div className="left-section">
        <Link to="/" className="logo">
          <img src="/favicon.svg" alt="Logo" className="logo-icon" />
          <span className="logo-text">ShoppyGlobe</span>
        </Link>
      </div>

      {/* Navigation on the right */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
