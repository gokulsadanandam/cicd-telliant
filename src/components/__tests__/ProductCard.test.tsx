import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

const mockProduct = { id: 1, name: 'T-Shirt', price: 19.99, description: 'Comfy cotton tee' };
const mockAddToCart = jest.fn();

describe('ProductCard', () => {
  it('renders product details', () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
    expect(screen.getByText('T-Shirt')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    expect(screen.getByText('Comfy cotton tee')).toBeInTheDocument();
  });

  it('calls addToCart on button click', () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});