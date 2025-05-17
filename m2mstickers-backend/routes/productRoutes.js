const express = require('express');
const router = express.Router();
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const upload = require('../middlewares/upload');  // Import the upload middleware

// Route to get all products
router.get('/', getProducts);

// Route to add a product
router.post('/', upload, addProduct);

// Route to update a product
router.put('/:id', upload, updateProduct);  // Use upload middleware here for image upload

// Route to delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
