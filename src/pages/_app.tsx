import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}