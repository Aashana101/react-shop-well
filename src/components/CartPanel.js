import React from "react";
import "./CartPanel.css";

const CartPanel = ({ isOpen, cart, toggleCart, updateCart }) => {
  // Calculate the total price of the cart
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle increment and decrement of item quantities
  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (action === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrement" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    updateCart(updatedCart); // Ensure this function is passed properly from props
  };

  return (
    <div className={`cart-panel ${isOpen ? "open" : ""}`}>
      <button className="close-cart" onClick={toggleCart}>
        ✖
      </button>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(item.id, "decrement")}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(item.id, "increment")}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Footer displaying total amount */}
      <div className="cart-footer">
        <p className="total-amount">Total: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPanel;
