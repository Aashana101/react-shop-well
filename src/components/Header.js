import React from "react";
import "../../src/App.css"; // Import CSS file for styling

const Header = ({ toggleCart, totalItemsInCart }) => (
  <header className="header">
    {/* Logo Section */}
    <div className="header-logo">
      <img
        src="https://icons.iconarchive.com/icons/jozef89/services-flat/512/ecommerce-icon.png"
        alt="Logo"
        className="logo-image"
      />
    </div>

    {/* Title Section */}
    <h1 className="header-title">SHOP WELL</h1>

    {/* Navigation Bar */}
    <nav className="header-nav">
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/wishlist">Wishlist</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
        <li className="cart-container">
          {/* Button to toggle the cart panel */}
          <button className="cart-btn" onClick={toggleCart}>
            <img
              src="https://c8.alamy.com/comp/R1R4TE/shopping-cart-vector-icon-isolated-on-transparent-background-shopping-cart-transparency-logo-concept-R1R4TE.jpg"
              className="cart-image"
              alt="Cart"
            />
          </button>
          {/* Cart badge displaying the number of items */}
          <div className="cart-badge">{totalItemsInCart}</div>{" "}
          {/* Dynamically display the total items */}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
