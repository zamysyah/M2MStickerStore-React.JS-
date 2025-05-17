import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function AddProduct() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category') || '';

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: categoryParam,
    image: null, // Gambar yang akan diunggah
  });

  const [imagePreview, setImagePreview] = useState(null); // Untuk menampilkan preview gambar

  useEffect(() => {
    if (categoryParam) {
      setProduct((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  // Handle input changes for text fields (name, description, price, category)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file selection and display a preview
  const handleImageChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if image file is selected
    if (!product.image) {
      alert('Please upload an image!');
      return;
    }

    // Prepare form data for the request
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('image', product.image); // Including the image file

    // Make sure to send the correct URL for the backend
    const backendURL = 'http://localhost:5000'; // Update if necessary
    axios.post(`${backendURL}/api/products`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Necessary for sending files
      },
    })
      .then(response => {
        alert('Produk berhasil ditambahkan!');
        setProduct({ name: '', description: '', price: '', category: categoryParam, image: null });  // Reset form but keep category
        setImagePreview(null);  // Reset image preview
      })
      .catch(error => {
        console.error('Error adding product:', error);
        alert('Terjadi kesalahan saat menambahkan produk!');
      });
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold mb-12 text-red-600 text-center">Tambah Produk</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
        {/* Product Name */}
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

        {/* Product Description */}
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

        {/* Product Price */}
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

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4 text-center">
            <img src={imagePreview} alt="Preview Produk" className="max-w-full h-64 object-contain mx-auto" />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition mt-4">
          Tambah Produk
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
