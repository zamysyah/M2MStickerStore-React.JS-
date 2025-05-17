import React, { useState } from 'react';
import { FaTiktok, FaInstagram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {  // Changed from full URL to relative path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatusMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="container mx-auto px-6 py-12 flex-grow">
        <h2 className="text-4xl font-extrabold mb-8 text-red-600 text-center">Contact &amp; Cooperation</h2>
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cooperation or Collaboration</h3>
          <p className="mb-6 text-gray-600">Untuk kerja sama atau kolaborasi, silakan hubungi kami di:</p>
          <a href="mailto:m2mstickerr@gmail.com" className="text-red-600 font-semibold hover:underline transition">m2mstickerr@gmail.com</a>
          {/* Social media icons */}
          <div className="flex space-x-4 mt-6">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@m2m.sticker.concept"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-2xl"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zamysyah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </section>

        <section className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Store Location</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1234567890123!2d109.3218776!3d-7.0993185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fe92e628284df%3A0x4fa72b5001c9514d!2sM2M%20Sticker%202!5e0!3m2!1sen!2sid!4v1682950000000!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Store Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form bg-white rounded-xl shadow-lg p-8 my-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Form">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2 text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition ease-in-out duration-300"
            >
              Send Message
            </button>
          </form>
          {statusMessage && (
            <div className="mt-4 text-center text-lg font-medium text-gray-800">
              {statusMessage}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Contact;
