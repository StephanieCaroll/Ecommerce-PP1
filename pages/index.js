import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Payment from '../components/Payment';
import Toast from '../components/Toast';

export default function Home() {
  const [page, setPage] = useState('home');
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setToastMessage('Product added to cart!');
    setTimeout(() => setToastMessage(''), 2000); // Mensagem some após 2 segundos
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    setToastMessage('Product removed from cart!');
    setTimeout(() => setToastMessage(''), 2000); // Mensagem some após 2 segundos
  };

  const handleGoBack = () => {
    setShowCart(false);
  };

  const handleProceedToPayment = () => {
    setPage('payment');
  };

  return (
    <div>
      <Header setShowCart={setShowCart} setPage={setPage} />
      <main style={styles.main}>
        {page === 'home' && (
          <>
            {showCart ? (
              <Cart
                cartItems={cartItems}
                removeFromCart={handleRemoveFromCart}
                onGoBack={handleGoBack}
                onProceedToPayment={handleProceedToPayment}
              />
            ) : (
              <ProductList onAddToCart={handleAddToCart} />
            )}
          </>
        )}
        {page === 'payment' && <Payment cartItems={cartItems} onGoBack={() => setPage('home')} />}
        {toastMessage && <Toast message={toastMessage} />}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};
