import React from 'react';

export default function Toast({ message }) {
  return (
    <div className="toast show position-fixed bottom-0 end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true" style={{ zIndex: 5 }}>
      <div className="toast-header">
        <strong className="me-auto">Cart</strong>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        {message}
      </div>
    </div>
  );
}
