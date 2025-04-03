import { render, act } from '@testing-library/react';
import { CartContextType, CartItem, CartProvider, useCart } from '../context/CartContext';
import { Product } from '../data/products';
import { ReactNode } from 'react';

// Mock product
const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  price: 100,
  description: 'Test Description',
};

// Helper component to access cart context in tests
const CartConsumer: React.FC<{ children: (context: CartContextType) => ReactNode }> = ({ children }) => {
  const context = useCart();
  return <>{children(context)}</>;
};

describe('CartContext', () => {
  it('adds a product to the cart', () => {
    let cart: CartItem[] = [], addToCart: (product: Product) => void;
    
    render(
      <CartProvider>
        <CartConsumer>
          {(context) => {
            cart = context.cart;
            addToCart = context.addToCart;
            return null;
          }}
        </CartConsumer>
      </CartProvider>
    );

    expect(cart).toHaveLength(0);

    act(() => {
      addToCart(mockProduct);
    });

    expect(cart).toHaveLength(1);
    expect(cart[0]).toEqual({ product: mockProduct, quantity: 1 });

    act(() => {
      addToCart(mockProduct);
    });

    expect(cart[0].quantity).toBe(2);
  });

  it('removes a product from the cart', () => {
    let cart: CartItem[] = [], addToCart: (product: Product) => void, removeFromCart: (id: number) => void;

    render(
      <CartProvider>
        <CartConsumer>
          {(context) => {
            cart = context.cart;
            addToCart = context.addToCart;
            removeFromCart = context.removeFromCart;
            return null;
          }}
        </CartConsumer>
      </CartProvider>
    );

    act(() => {
      addToCart(mockProduct);
      addToCart(mockProduct);
    });

    expect(cart[0].quantity).toBe(2);

    act(() => {
      removeFromCart(mockProduct.id);
    });

    expect(cart[0].quantity).toBe(1);

    act(() => {
      removeFromCart(mockProduct.id);
    });

    expect(cart).toHaveLength(0);
  });
});
