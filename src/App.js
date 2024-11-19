import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import CartPanel from "./components/CartPanel"; // Import CartPanel component
import "./App.css";

function App() {
  const [cart, setCart] = useState([]); // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false); // Side panel state

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to update the cart with the modified items
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  // Function to toggle the cart panel
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Calculate the total quantity of items in the cart
  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Router>
      <div className="App">
        <Header toggleCart={toggleCart} totalItemsInCart={totalItemsInCart} />{" "}
        {/* Pass totalItemsInCart */}
        <CartPanel
          isOpen={isCartOpen}
          cart={cart}
          toggleCart={toggleCart}
          updateCart={updateCart}
        />
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />} // Pass addToCart
          />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />} // Pass addToCart
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
