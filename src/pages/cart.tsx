import type { NextPage } from 'next';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { Container, Table, Button, Navbar, Nav } from 'react-bootstrap';

const Cart: NextPage = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Your Cart</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} href="/">Back to Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.product.id}>
                    <td>{item.product.name}</td>
                    <td>${item.product.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button variant="danger" onClick={() => removeFromCart(item.product.id)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h3>Total: ${total.toFixed(2)}</h3>
            <Button variant="success" onClick={() => alert('Checkout simulation complete!')}>
              Checkout
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;