export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "T-Shirt", price: 19.99, description: "Comfy cotton tee" },
  { id: 2, name: "Jeans", price: 49.99, description: "Slim-fit denim" },
  { id: 3, name: "Sneakers", price: 79.99, description: "Stylish kicks" },
  { id: 4, name: "Socks", price: 7.99, description: "Cut Socks" },
];
