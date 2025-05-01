import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <Link to={`/products/${product.id}`} className="flex-1 flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain p-4 bg-gray-100"
          loading="lazy"
        />
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-2 capitalize">{product.category}</p>
          <span className="text-blue-600 font-bold text-xl mt-auto">${product.price}</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
