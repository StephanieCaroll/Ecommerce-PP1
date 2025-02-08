import React, { useState } from 'react';

export default function Payment({ cartItems, onGoBack }) {
  const total = cartItems.reduce((acc, item) => acc + item.normalPrice, 0).toFixed(2);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePayment = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para processar o pagamento
    alert('Pagamento realizado com sucesso!');
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'credit':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Name on Card</label>
              <input
                type="text"
                className="form-control"
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">Expiry date</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        );
      case 'paypal':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="paypalEmail" className="form-label">PayPal E-mail</label>
              <input
                type="email"
                className="form-control"
                id="paypalEmail"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        );
      case 'boleto':
        return (
          <div className="mb-3">
            <p>To generate the invoice, click the button below:</p>
            <button type="button" className="btn btn-primary">Generate Bank Slip</button>
          </div>
        );
      case 'transferencia':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="bankName" className="form-label">Bank Name</label>
              <input
                type="text"
                className="form-control"
                id="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="accountNumber" className="form-label">Account Number</label>
              <input
                type="text"
                className="form-control"
                id="accountNumber"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <h2>Pagamento</h2>
      <p>Total: $ {total}</p>
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
          <select
            className="form-select"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select a method</option>
            <option value="credit">Credit card</option>
            <option value="paypal">PayPal</option>
            <option value="boleto">Bank Slip</option>
            <option value="transferencia">Bank Transfer</option>
          </select>
        </div>
        {renderPaymentFields()}
        {paymentMethod !== 'boleto' && (
          <button type="submit" className="btn btn-primary">Send Payment</button>
        )}
        <div className="d-flex justify-content-between mt-3">
          <button type="button" className="btn btn-secondary" onClick={onGoBack}>← Back</button>
        </div>
      </form>
    </div>
  );
}
