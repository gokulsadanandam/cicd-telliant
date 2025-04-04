import { Product } from '../data/products';
import { Card, Button, Toast } from 'react-bootstrap';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };


  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{ position: 'fixed', bottom: '40px', right: '20px', zIndex: 1000 }}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Cart Update</strong>
        </Toast.Header>
        <Toast.Body>{`${product.name} added to cart!`}</Toast.Body>
      </Toast>
    </Card>
  );
};

export default ProductCard;