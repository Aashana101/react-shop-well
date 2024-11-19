import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    {/* Display product image */}
    <img src={product.image} alt={product.name} className="product-image" />

    {/* Product details */}
    <h3>{product.name}</h3>
    <p>Category: {product.category}</p>

    {/* Price and View Information */}
    <div className="price-and-view">
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="view-info-link">
        View Information
      </Link>
    </div>
    <button
      className="add-to-cart-button"
      onClick={() => addToCart(product)} // Add product to cart on click
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
