import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Produk from './pages/Produk';
import SemuaKendaraan from './pages/SemuaKendaraan';
import Bus from './pages/Bus';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import AddProductBus from './pages/AddProductBus';
import WhatsAppButton from './components/WhatsAppButton'; // ✅ Import tombol WhatsApp

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/semua-kendaraan" element={<SemuaKendaraan />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-product-bus" element={<AddProductBus />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </main>

      <WhatsAppButton /> {/* ✅ Tombol WA muncul di semua halaman */}

      <Footer />
    </div>
  );
}

export default App;
