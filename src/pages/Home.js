import React from 'react';

function Home() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 text-white shadow-2xl">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            MODIFIKASI VARIASI <span className="text-red-600">KENDARAAN ANDA</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white-600">
            Beri Sentuhan Personal dengan Stiker Keren, Schothlite Stylish, dan Kaca Film Berkualitas!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/produk"
              className="rounded-full bg-red-800 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-red-600 transition"
            >
              Jelajahi Produk
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-red-700">Produk Unggulan Kami</h2>
            <p className="mt-4 text-lg text-gray-600">Pilih kategori yang sesuai untuk kendaraan Anda</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { title: 'Kaca Film', img: '/img/kacaFilm.jpeg', desc: 'Mengurangi Panas dan UV' },
              { title: 'Scothlite', img: '/img/scothlite.jpg', desc: 'Tampilan stylish & fungsional' },
              { title: 'Sticker', img: '/img/sticker.jpeg', desc: 'Desain personal keren' },
              { title: 'Kepet', img: '/img/kepet.jpeg', desc: 'Perlindungan & gaya' },
              { title: 'Livery', img: '/img/livery.jpeg', desc: 'Khusus kendaraan fleet' },
              { title: 'Striping', img: '/img/striping.jpeg', desc: 'tampilan stylish & keren' },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={cat.img} alt={cat.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">{cat.title}</h3>
                  <p className="text-gray-600">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-700 text-center mb-10">Kenapa Memilih M2M Stickers?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
            <li className="flex gap-4">
              <span className="text-red-600 font-bold">✓</span>
              Kualitas bahan stiker yang tahan lama dan mudah diaplikasikan.
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-bold">✓</span>
              Desain variatif yang disesuaikan dengan kendaraan Anda.
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-bold">✓</span>
              Harga kompetitif dengan layanan profesional.
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-bold">✓</span>
              Pengiriman cepat dan aman ke seluruh Indonesia.
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-bold">✓</span>
              Layanan pelanggan yang responsif dan ramah.
            </li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: 'fas fa-store', label: 'Pemesanan bisa di toko' },
            { icon: 'fas fa-laptop-house', label: 'Pemesanan online tersedia' },
            { icon: 'fas fa-shield-alt', label: 'Produk terjamin kualitasnya' },
            { icon: 'fas fa-tags', label: 'Terdapat Garansi Pemasangan' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow hover:shadow-md transition">
              <i className={`${item.icon} text-4xl text-red-600 mb-4`} />
              <p className="text-lg font-semibold text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Tentang Kami</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            M2M Stickers adalah mitra terpercaya untuk personalisasi kendaraan. Kami menyediakan stiker, skotlite, kaca film berkualitas tinggi, striping dan lain sebagainya seputar modifikasi kendaraan untuk meningkatkan tampilan dan keamanan kendaraan Anda. Misi kami adalah menyediakan produk stylish, tahan lama, dan terjangkau untuk kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-12">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { quote: 'Garapan didi M2M joss rapih, cepat, kreatif, dan harga murah.', name: 'Rojak2an.' },
              { quote: 'M2M salah satu yg terbaik dan terlama bisnis sticker di Pemalang #Legend.', name: 'Adhi Prima.' },
              { quote: 'Stikernya jos, apalagi untuk anda yang pencinta bus. Pas dengan selera anda sebagai bismani.', name: 'Muhni Azhar Fadoli.' },
            ].map((item, i) => (
              <blockquote key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="italic text-gray-700 mb-4">"{item.quote}"</p>
                <footer className="text-red-700 font-semibold">- {item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-700 text-white text-center py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Siap untuk Memodifikasi Kendaraan Anda?</h2>
        <p className="text-lg mb-8">Jelajahi produk kami atau hubungi Sekarang untuk memulai transformasi kendaraan Anda!</p>
        <a
          href="/produk"
          className="rounded-full bg-gray-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-gray-900 transition"
        >
          Jelajahi Produk
        </a>
      </section>

    </main>
  );
}

export default Home;
