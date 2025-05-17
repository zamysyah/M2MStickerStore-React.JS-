const Product = require('../models/Product');

// Fungsi untuk menambahkan produk
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    
    // Handle file upload
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required.' });
    }
    
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}` : '';  // Full URL for image

    const newProduct = new Product({ name, description, price, category, imageUrl });
    await newProduct.save();

    res.status(200).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product', error });
  }
};

// Fungsi untuk mendapatkan semua produk (kategori 'semua')
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: 'semua' });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Fungsi untuk mengupdate produk
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    
    // Handle file upload if it exists
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}` : '';  // Full URL for image

    const updateData = { name, description, price, category };
    if (imageUrl) {
      updateData.imageUrl = imageUrl;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product', error });
  }
};

// Fungsi untuk menghapus produk
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
};


module.exports = { addProduct, getProducts, updateProduct, deleteProduct };
