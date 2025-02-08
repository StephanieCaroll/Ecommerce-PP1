import React from 'react';

export default function Cart({ cartItems, removeFromCart, onGoBack, onProceedToPayment }) {
  const total = cartItems.reduce((acc, item) => acc + item.normalPrice, 0).toFixed(2);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Your Cart</h2>
        <button className="btn btn-secondary" onClick={onGoBack}>← Back</button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 text-center shadow-sm">
                  <img src={item.image} alt={item.title} className="card-img-top p-3" style={{ height: '150px', objectFit: 'contain' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title fs-5 fw-bold">{item.title}</h3>
                    <p className="card-text text-primary fw-semibold">Normal Price: $ {item.normalPrice.toFixed(2)}</p>
                    <button className="btn btn-danger mt-auto" onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: $ {total}</h4>
            <button className="btn btn-success" onClick={onProceedToPayment}>Finalize Purchase</button>
          </div>
        </>
      )}
    </div>
  );
}
