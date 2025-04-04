import type { NextPage } from 'next';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Home: NextPage = () => {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>E-commerce Store</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4 mx-auto">
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={3}>
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;