import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="space-wrapper">
        <img src="/lost-in-space.svg" alt="Lost in space" className="space-img" />
      </div>
      <h1 className="not-found-title">You're Lost in Space</h1>
      <p className="not-found-text">Looks like the page you're looking for drifted away.</p>
      <Link to="/" className="not-found-btn">Return to Earth</Link>
    </div>
  );
};

export default NotFound;
