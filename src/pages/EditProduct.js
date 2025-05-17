import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const { id } = useParams(); // Ambil ID dari URL

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/api/products/${id}`, product)
      .then(response => {
        alert('Produk berhasil diperbarui!');
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold mb-12 text-red-600 text-center">Edit Produk</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Nama Produk" required />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Deskripsi Produk" required />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Harga Produk" required />
        <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="URL Gambar" required />
        <button type="submit">Update Produk</button>
      </form>
    </div>
  );
}

export default EditProduct;
