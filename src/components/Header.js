import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-600 via-red-700 to-black shadow-xl sticky top-0 z-50 font-montserrat border-b border-red-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide text-white select-none uppercase drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          M2M STICKER
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block rounded-lg px-4 py-2 shadow-md md:bg-transparent md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 text-lg font-semibold tracking-wide">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white rounded-lg px-5 py-2 no-underline shadow-md shadow-black'
                    : 'text-gray-200 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white rounded-lg px-5 py-2 no-underline'
                }
                end={true}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/produk"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white rounded-lg px-5 py-2 no-underline shadow-md shadow-black'
                    : 'text-gray-200 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white rounded-lg px-5 py-2 no-underline'
                }
                onClick={() => setIsOpen(false)}
              >
                Produk
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white rounded-lg px-5 py-2 no-underline shadow-md shadow-black'
                    : 'text-gray-200 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white rounded-lg px-5 py-2 no-underline'
                }
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
