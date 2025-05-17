import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bus() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ambil data produk khusus bus dari API bus-products
    axios.get('/api/bus-products')  // Updated API endpoint for bus products
      .then(response => {
        setProducts(response.data);  // Simpan data produk ke state
      })
      .catch(error => {
        console.error('Error fetching bus products:', error);
      });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-red-600 text-center">Produk Khusus Bus</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Berikut adalah produk variasi khusus untuk bus yang tersedia di toko M2M Stickers.
        </p>

        <div className="overflow-x-auto max-w-5xl mx-auto">
          <div className="flex space-x-6 py-4">
            {products.map((product) => (
              <div key={product._id} className="min-w-[300px] bg-white rounded-lg shadow p-4 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center" tabIndex="0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-md mb-2 w-full object-cover h-60"
                />
                <h3 className="text-xl font-semibold mb-1 text-center">{product.name}</h3>
                <p className="text-center text-gray-600">{product.description}</p>
                <p className="text-center text-gray-600 italic">{product.category}</p>
                <p className="text-center text-gray-800 font-bold">{`Rp ${product.price}`}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bus;
