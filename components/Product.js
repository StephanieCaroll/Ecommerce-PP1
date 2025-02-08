// components/Product.js
import React from 'react';

export default function Product({ product, onAddToCart, onClick }) {
  return (
    <div className="card h-100 text-center shadow-sm" style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: '150px', objectFit: 'contain' }} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title fs-5 fw-bold">{product.title}</h3>
        <p className="card-text text-primary fw-semibold">Normal Price: $ {product.normalPrice.toFixed(2)}</p>
        <p className="card-text">Rating: {product.rating}</p>
        <button className="btn btn-primary mt-auto" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>Add to Cart</button>
      </div>
    </div>
  );
}
