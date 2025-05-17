const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// Removed HTTPS setup to use HTTP server instead
const productRoutes = require('./routes/productRoutes');
const busProductRoutes = require('./routes/busProductRoutes');
const sendEmailRoutes = require('./routes/sendEmailRoutes');
require('dotenv').config();  // To use environment variables

const app = express();


// Middleware setup
app.use(cors());
app.use(express.json());  // Parsing JSON request body
app.use(express.urlencoded({ extended: true })); // Parsing URL-encoded data (for forms)

// MongoDB Atlas connection
const mongoURI = process.env.MONGO_URI; // Mongo URI should be defined in the .env file

// Connecting to MongoDB Atlas with async/await for cleaner code
const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);  // Removed useNewUrlParser and useUnifiedTopology
    console.log('MongoDB Atlas connected');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1); // Exit the process with failure code
  }
};

// Call the MongoDB connection function
connectMongoDB();

// Use product routes
app.use('/api/products', productRoutes);  // Mount productRoutes at '/api/products' for general products
app.use('/api/bus-products', busProductRoutes);  // Mount busProductRoutes at '/api/bus-products' for bus products
app.use('/', sendEmailRoutes); // Mount sendEmailRoutes at root for /send-email

// Serve image files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Default route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start HTTP server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`);
});

// Handle uncaught exceptions and unhandled promise rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process with failure code
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1); // Exit the process with failure code
});

// Graceful shutdown for the server
const gracefulShutdown = () => {
  console.log('Closing server and cleaning up...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    server.close(() => {
      console.log('Server shut down gracefully');
      process.exit(0); // Exit the process with success code
    });
  });
};

// Catch termination signals to shut down gracefully
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
