import React, { useState } from "react";
import products from "./products";
import ProductCard from "./ProductCard";
import ComparisonTable from "./ComparisonTable";
import './App.css';


const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (product) => {
    if (!selectedProducts.includes(product) && selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div>
      <h1>Product Comparison App</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} handleSelect={handleSelect} />
        ))}
      </div>
      {selectedProducts.length > 0 && <ComparisonTable selectedProducts={selectedProducts} />}
    </div>
  );
};

export default App;
