import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

const Products: React.FC = () => {
  return (
    <div>
      {/* <section id="Products" className="text-black h-screen bg-white flex">
        <h1 className="m-auto font-waterfall text-7xl text-black font-bold">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong>
            </div>
            <div>${product.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
              </h1>
      </section> */}

      {/* <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong>
            </div>
            <div>${product.price.toFixed(2)}</div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Products;
