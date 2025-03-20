import React from "react";

const ComparisonTable = ({ selectedProducts }) => {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          {selectedProducts.map((product) => (
            <th key={product.id}>{product.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          {selectedProducts.map((product) => (
            <td key={product.id}>₹{product.price}</td>
          ))}
        </tr>
        <tr>
          <td>Rating</td>
          {selectedProducts.map((product) => (
            <td key={product.id}>{product.rating}⭐</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
