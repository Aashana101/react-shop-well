// ProductDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json"; // Assuming the products data is stored here
import "../App.css"; // Include styling for the details page

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Use navigate to go back to the previous page
  const product = products.find((p) => p.id === parseInt(id)); // Find the product using the ID

  if (!product) {
    return <h2>Product not found!</h2>; // If no product is found, show an error message
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>

      {/* Add to Cart Button */}
      <div className="product-buttons">
      <button onClick={() => addToCart(product)} className="add-to-cart-buttons">
        Add to Cart
      </button>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      </div>
    </div>
  );
};

export default ProductDetails;
