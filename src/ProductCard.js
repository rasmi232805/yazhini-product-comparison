import React from "react";

const ProductCard = ({ product, handleSelect }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" /> {/* Display the image */}
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Rating: {product.rating}⭐</p>
      <button onClick={() => handleSelect(product)}>Compare</button>
    </div>
  );
};

export default ProductCard;
