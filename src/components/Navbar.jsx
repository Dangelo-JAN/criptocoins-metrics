import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="container-nav">
      <h1 className="page-title">Criptocoins Metrics</h1>
      <div className="links-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/details">Details</Link>
      </div>
    </div>
  </>
);

export default Navbar;
