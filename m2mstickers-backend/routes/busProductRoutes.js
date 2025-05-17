const express = require('express');
const router = express.Router();
const { addProductBus, getBusProducts, updateProductBus, deleteProductBus } = require('../controllers/productBusController');
const upload = require('../middlewares/upload');

// Route to get all bus products
router.get('/', getBusProducts);

// Route to add a bus product
router.post('/', upload, addProductBus);

// Route to update a product
router.put('/:id', upload, updateProductBus);  // Use upload middleware here for image upload

// Route to delete a product
router.delete('/:id', deleteProductBus);

module.exports = router;
