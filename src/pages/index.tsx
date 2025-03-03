import type { NextPage } from 'next';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const Home: NextPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h1>E-commerce Store</h1>
      <Link href="/cart">Go to Cart</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;