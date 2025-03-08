import React from 'react';

function Footer() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                <h3 className="text-lg font-semibold mb-4">My Website</h3>
                <p className="text-gray-400 leading-relaxed">
                    Empowering you with the best online courses, products, and services.
                </p>
                <div className="flex space-x-4 mt-6">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110"
                    >
                        <Icon className="h-6 w-6" />
                    </a>
                    ))}
                </div>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                    <li key={index}>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                        {link}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3 text-gray-400">
                    <p>123 Main Street, City, Country</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <div className="mt-4">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-r-md hover:bg-purple-700 transition duration-200 transform hover:scale-105">
                        Subscribe
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>© 2025 My Website. All rights reserved.</p>
            </div>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;