import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from '../components/ProductItem';

const Home = () => {
  const { products, error } = useFetchProducts();
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const withinRange = product.price >= minPrice && product.price <= maxPrice;
    return matchesSearch && withinRange;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Shopping Icon"
            className="hero-icon"
          />
          <h1>Discover the Best Deals Every Day</h1>
          <p>ShoppyGlobe brings you high-quality products at unbeatable prices. Start shopping now and enjoy a seamless experience.</p>
          <a href="#products" className="hero-btn">Start Shopping</a>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Shopping Banner"
          />
        </div>
      </section>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* 💰 Price Slider Range */}
      <div className="price-slider-range">
        <label>
          Min Price: ${minPrice}
          <input
            type="range"
            min="0"
            max="3000"
            step="1"
            value={minPrice}
            onChange={e => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price: ${maxPrice}
          <input
            type="range"
            min="0"
            max="3000"
            step="1"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="product-list" id="products">
        {error && <p>Error loading products.</p>}

        {filteredProducts.length === 0 ? (
          <p className="no-results">No products match your search.</p>
        ) : (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>

      {/* 🔝 Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>↑ Back to Top</button>

      {/* 🔻 Footer */}
      <footer className="footer">
        <p>© 2025 ShoppyGlobe · Contact us at support@shoppyglobe.com</p>
      </footer>
    </div>
  );
};

export default Home;
