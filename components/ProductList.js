// components/ProductList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

export default function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/deals', {
          params: {
            storeID: '1',
          },
        });
        const data = response.data.map(deal => ({
          id: deal.dealID,
          title: deal.title,
          salePrice: parseFloat(deal.salePrice),
          normalPrice: parseFloat(deal.normalPrice),
          savings: parseFloat(deal.savings),
          metacriticScore: deal.metacriticScore,
          steamRatingText: deal.steamRatingText,
          steamRatingPercent: deal.steamRatingPercent,
          steamAppID: deal.steamAppID,
          image: deal.thumb,
          rating: parseFloat(deal.dealRating),
          category: 'games',
        }));
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading products...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div style={styles.center}>
        <p>Error loading products. Please try again!</p>
      </div>
    );

  return (
    <div className="container">
      {selectedProduct ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="card" style={{ width: "50rem" }}>
            <img
              src={selectedProduct.image}
              className="card-img-top"
              alt={selectedProduct.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">{selectedProduct.title}</h5>
              <p className="card-text">Normal Price: $ {selectedProduct.normalPrice.toFixed(2)}</p>
              <p className="card-text">Rating: {selectedProduct.rating}</p>
              <p className="card-text">Savings: {selectedProduct.savings}%</p>
              <p className="card-text">Metacritic Score: {selectedProduct.metacriticScore}</p>
              <p className="card-text">Steam Rating: {selectedProduct.steamRatingText} ({selectedProduct.steamRatingPercent}%)</p>
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary me-2" onClick={(e) => { e.stopPropagation(); onAddToCart(selectedProduct); }}>Add to Cart</button>
                <button onClick={() => setSelectedProduct(null)} className="btn btn-secondary mt-2">
                  To go back
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
  },
};
