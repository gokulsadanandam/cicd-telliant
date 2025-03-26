import type { NextPage } from 'next';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const Cart: NextPage = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <Link href="/">Go Back to Store</Link>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={() => alert('Checkout simulation complete!')}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;