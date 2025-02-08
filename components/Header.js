import React from 'react';
import SearchBar from './SearchBar';

export default function Header({ products, setFilteredProducts, setShowCart }) {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="/images/logo.svg" alt="GameZone Logo" width="40" height="32" />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-white" onClick={() => setShowCart(true)}>Orders</a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">Products</a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">Clients</a>
            </li>
          </ul>
          <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
          <div className="dropdown text-end">
            <a href="#" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/images/user.jpg" alt="User" width="32" height="32" className="rounded-circle" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
