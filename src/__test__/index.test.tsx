import { CartProvider } from '@/context/CartContext';
import Home from '@/pages';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders the store title', () => {
    render(
      <CartProvider>
        <Home />
      </CartProvider>
    );
    expect(screen.getByText('E-commerce Store')).toBeInTheDocument();
  });
});