import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-64 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <p className="text-green-600 font-bold mt-2">৳{product.price}</p>
      <p className="text-gray-600 text-sm">
        Stock: {product.stock > 0 ? product.stock : "Out of stock"}
      </p>
      <button className="mt-3 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
