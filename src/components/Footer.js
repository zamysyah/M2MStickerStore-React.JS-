import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 via-black to-red-900 border-t border-red-900 py-8 mt-12 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">About M2M Stickers</h3>
          <p className="text-sm">
            Percantik kendaraan Anda dengan stiker custom dari M2M Stickers – kualitas premium, desain sesuai keinginan, kirim cepat, dan layanan pelanggan yang siap membantu Anda kapan saja!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: m2mstickerr@gmail.com</p>
          <p className="text-sm">Phone: +62 857 1053 2090</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.tiktok.com/@m2m.sticker.concept" className="hover:text-indigo-300" aria-label="TikTok">
              <i className="fab fa-tiktok fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/zamysyah/" className="hover:text-indigo-300" aria-label="Instagram">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-white font-bold text-xs mt-8">
        © 2025 M2M Stickers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
