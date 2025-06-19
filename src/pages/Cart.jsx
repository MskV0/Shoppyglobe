import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    dispatch(clearCart());
    setOrderPlaced(true);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {orderPlaced ? (
        <>
          <p className="order-success">
            ✅ Order placed successfully! Thank you for shopping with us.
          </p>
          <p className="order-prompt">
            🎁 More amazing deals are waiting! New arrivals and exclusive
            discounts just landed — don’t miss out!
          </p>
          <div className="go-home">
            <Link to="/" className="home-btn">
              🔥 Explore More Products
            </Link>
          </div>
        </>
      ) : cart.length === 0 ? (
        <>
          <p className="empty-cart">🛍️ Your cart is feeling a little lonely.</p>
          <p className="order-prompt">
            Let’s change that — discover amazing products now!
          </p>
          <div className="go-home">
            <Link to="/" className="home-btn">
              🛒 Shop Now
            </Link>
          </div>
        </>
      ) : (
        <>
          {cart.length > 0 &&
            cart.map((item) => <CartItem key={item.id} item={item} />)}
          <div className="cart-summary">
              <div className="cart-actions">
              <div className="cart-summary">
                <p>
                  <strong>Total Items:</strong> {totalItems}
                </p>
                <p>
                  <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                </p>
              </div>

              <div className="cart-buttons">
                <button
                  className="cart-btn checkout-btn"
                  onClick={handleCheckout}
                >
                  <span role="img" aria-label="checkout">
                    💳
                  </span>{" "}
                  Proceed to Checkout
                </button>
                <button
                  className="cart-btn clear-cart-btn"
                  onClick={() => dispatch(clearCart())}
                >
                  <span role="img" aria-label="clear">
                    🗑️
                  </span>{" "}
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <footer className="footer">
        <p>© 2025 ShoppyGlobe · All rights reserved</p>
      </footer>
    </div>
  );
};

export default Cart;
