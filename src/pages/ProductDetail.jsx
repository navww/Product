import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error} <div className="mt-4"><Link to="/" className="text-blue-600 underline">Back to Products</Link></div></div>;
  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">&larr; Back to Products</Link>
      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-64 object-contain bg-gray-100 rounded"
        />
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 text-sm mb-2 capitalize">{product.category}</p>
          <span className="text-blue-600 font-bold text-2xl mb-4">${product.price}</span>
          <p className="text-gray-800">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
