const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Menyimpan file di folder 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Membuat nama file unik berdasarkan timestamp
  }
});

// Filter untuk memastikan hanya file gambar yang dapat diunggah
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;  // Ekstensi file yang diizinkan
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Only images are allowed');
  }
};

// Setup Multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },  // Batasi ukuran file 5MB
  fileFilter: fileFilter
}).single('image');  // 'image' adalah nama field di frontend untuk gambar

// Mengekspor konfigurasi upload
module.exports = upload;
