// src/components/ProductList.tsx
import React from 'react';
import './ProductList.css'; // Importez le fichier CSS pour les styles spécifiques à ProductList

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const ProductList: React.FC = () => (
  <div className="ProductList">
    <h2>List of Products</h2>
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id}>
          <strong>{product.name}</strong> - ${product.price}
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
