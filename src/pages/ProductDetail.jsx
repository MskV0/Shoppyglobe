import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const product = products.find(p => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product) setMainImage(product.thumbnail);
  }, [product]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>

      <img src={mainImage} alt={product.title} className="main-thumbnail" />

      <div className="product-images">
        {product.images?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${product.title} ${i}`}
            onClick={() => setMainImage(img)}
            className="gallery-thumbnail"
            style={{
              border: img === mainImage ? '2px solid #42a5f5' : '1px solid #ccc',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              transform: img === mainImage ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        ))}
      </div>

      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}%</p>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
      <p><strong>Shipping:</strong> {product.shippingInformation}</p>
      <p><strong>Return Policy:</strong> {product.returnPolicy}</p>

      <ul className="reviews">
        <h4>Reviews</h4>
        {product.reviews?.map((review, i) => (
          <li key={i}>
            <strong>{review.rating}⭐</strong> — {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
