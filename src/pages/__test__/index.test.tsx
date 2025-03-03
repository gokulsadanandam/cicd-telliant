import { render, screen } from '@testing-library/react';
import Home from '../index';
import { CartProvider } from '../../context/CartContext';

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