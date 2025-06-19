import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-img"
        />
        <h3>{product.title}</h3>
      </Link>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}% OFF</p>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
