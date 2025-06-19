import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p className="price">${item.price}</p>
        <p className="quantity">Quantity: {item.quantity}</p>
      </div>
      <button 
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
