const ProductBus = require('../models/ProductBus');

// Fungsi untuk menambahkan produk bus
const addProductBus = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Handle file upload
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required.' });
    }

    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}` : '';

    const newProductBus = new ProductBus({ name, description, price, category, imageUrl });
    await newProductBus.save();

    res.status(200).json(newProductBus);
  } catch (error) {
    console.error('Error adding bus product:', error);
    res.status(500).json({ message: 'Error adding bus product', error });
  }
};

// Fungsi untuk mendapatkan semua produk bus
const getBusProducts = async (req, res) => {
  try {
    const busProducts = await ProductBus.find();
    res.status(200).json(busProducts);
  } catch (error) {
    console.error('Error fetching bus products:', error);
    res.status(500).json({ message: 'Error fetching bus products', error });
  }
};

// Fungsi untuk mengupdate produk
const updateProductBus = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    
    // Handle file upload if it exists
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}` : '';  // Full URL for image

    const updateData = { name, description, price, category };
    if (imageUrl) {
      updateData.imageUrl = imageUrl;
    }

    const updatedProduct = await ProductBus.findByIdAndUpdate(
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
const deleteProductBus = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await ProductBus.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
};


module.exports = { addProductBus, getBusProducts, deleteProductBus, updateProductBus };
