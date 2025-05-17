import React from 'react';
import { Link } from 'react-router-dom';

function Produk() {
  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-red-600 no-underline text-center animate-fadeInDown">Produk M2M Sticker</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Link to="/semua-kendaraan" className="block bg-white rounded-lg shadow p-12 text-center hover:shadow-lg transition produk-no-underline transform hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-fadeInUp">
            <i className="fas fa-car text-red-600 text-6xl mb-6 animate-bounce"></i>
            <h3 className="text-3xl font-bold mb-2 text-red-600">Semua Kendaraan</h3>
            <p className="text-gray-600">Lihat semua produk variasi kendaraan kecil hingga besar.</p>
          </Link>
          <Link to="/bus" className="block bg-white rounded-lg shadow p-12 text-center hover:shadow-lg transition produk-no-underline transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl animate-fadeInUp">
            <i className="fas fa-bus text-red-600 text-6xl mb-6 animate-bounce"></i>
            <h3 className="text-3xl font-bold mb-2 text-red-600">Khusus Bus</h3>
            <p className="text-gray-600">Lihat produk khusus variasi untuk bus.</p>
          </Link>
        </div>
        

      </main>
      
    </div>
  );
}

export default Produk;
