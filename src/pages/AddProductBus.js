import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function AddProductBus() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category') || '';

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: categoryParam,
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (categoryParam) {
      setProduct((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct((prev) => ({ ...prev, image: file }));

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.image) {
      alert('Please upload an image!');
      return;
    }

    if (!product.category) {
      alert('Please select a category!');
      return;
    }

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('image', product.image);

    axios.post('http://localhost:5000/api/bus-products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        alert('Produk bus berhasil ditambahkan!');
        setProduct({
          name: '',
          description: '',
          price: '',
          category: categoryParam,
          image: null,
        });
        setImagePreview(null);
      })
      .catch((error) => {
        console.error('Error adding bus product:', error);
        alert('Terjadi kesalahan saat menambahkan produk bus!');
      });
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold mb-12 text-red-600 text-center">Tambah Produk Bus</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
        <div>
          <label htmlFor="name" className="block text-gray-700">Nama Produk</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Nama Produk"
            className="w-full mt-2 px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">Deskripsi Produk</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Deskripsi Produk"
            className="w-full mt-2 px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700">Harga Produk</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Harga Produk"
            className="w-full mt-2 px-4 py-2 border rounded-md"
            required
          />
        </div>

        {!categoryParam && (
          <div>
            <label htmlFor="category" className="block text-gray-700">Kategori Produk</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-md"
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="semua">Semua Kendaraan</option>
              <option value="bus">Bus</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="image" className="block text-gray-700">Pilih Gambar</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full mt-2 px-4 py-2 border rounded-md"
            required
          />
        </div>

        {imagePreview && (
          <div className="mt-4 text-center">
            <img src={imagePreview} alt="Preview Produk Bus" className="max-w-full h-64 object-contain mx-auto" />
          </div>
        )}

        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition mt-4">
          Tambah Produk Bus
        </button>
      </form>
    </div>
  );
}

export default AddProductBus;
