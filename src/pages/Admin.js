import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [products, setProducts] = useState([]);
  const [busProducts, setBusProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products and bus products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const [productsRes, busProductsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/products'),
        axios.get('http://localhost:5000/api/bus-products'),
      ]);
      setProducts(productsRes.data);
      setBusProducts(busProductsRes.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product by id and type ('product' or 'bus')
  const handleDelete = async (id, type) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      if (type === 'product') {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
      } else {
        await axios.delete(`http://localhost:5000/api/bus-products/${id}`);
      }
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-red-600 text-center">Admin Dashboard</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Halaman Admin untuk mengelola produk di M2M Stickers.
        </p>

        <div className="space-y-6">
          {/* Add product buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="/add-product" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Tambah Produk Baru
            </a>
            <a href="/add-product-bus" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
              Tambah Produk Bus Baru
            </a>
          </div>

          {/* General Products */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">Daftar Produk</h3>
            {products.length === 0 ? (
              <p className="text-center">Tidak ada produk.</p>
            ) : (
              products.map((product) => (
                <div key={product._id} className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {product.imageUrl && (
                      <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded" />
                    )}
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-gray-500">{product.description}</p>
                    </div>
                  </div>
                  <div>
                    <a href={`/edit-product/${product._id}`}>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
                        Edit
                      </button>
                    </a>
                    <button
                      onClick={() => handleDelete(product._id, 'product')}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition ml-2"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bus Products */}
          <div className="space-y-4 mt-12">
            <h3 className="text-2xl font-semibold text-center">Daftar Produk Bus</h3>
            {busProducts.length === 0 ? (
              <p className="text-center">Tidak ada produk bus.</p>
            ) : (
              busProducts.map((product) => (
                <div key={product._id} className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {product.imageUrl && (
                      <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded" />
                    )}
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-gray-500">{product.description}</p>
                    </div>
                  </div>
                  <div>
                    <a href={`/edit-product/${product._id}`}>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
                        Edit
                      </button>
                    </a>
                    <button
                      onClick={() => handleDelete(product._id, 'bus')}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition ml-2"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
