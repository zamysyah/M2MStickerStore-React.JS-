const mongoose = require('mongoose');

// Schema definition for Product
const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true,  // Trims any spaces around the name
  },
  description: { 
    type: String, 
    required: true,
    trim: true,  // Trims any spaces around the description
  },
  price: { 
    type: Number, 
    required: true,
    min: 0,  // Ensures the price is at least 0
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: { 
    type: String,
    validate: {
      validator: function(value) {
        return /^https?:\/\/[^\s$.?#].[^\s]*$/.test(value);  // Simple regex to validate a URL format
      },
      message: 'Invalid image URL format'
    }
  },
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Create model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
