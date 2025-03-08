import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { 
    Menu, 
    ShoppingCart, 
    Globe2, 
  } from 'lucide-react';

import BookingModal from './BookingModal';
  

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Startseite' },
    { path: '/about', label: 'Über mich' },
    { path: '/services', label: 'Dienstleistungen' },
    { path: '/courses', label: 'Online Kurse' },
    { path: '/shop', label: 'Online Shop' },
    { path: '/contact', label: 'Kontakt' }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <Globe2 className="h-8 w-8 text-purple-600" />
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-200 ${
                    isActive
                      ? 'text-purple-600 font-medium border-b-2 border-purple-600'
                      : 'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200 transform hover:scale-105"
            >
              Termin buchen
            </button>
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-purple-600 transition duration-200 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                2
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setIsBookingOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 mt-4"
            >
              Termin buchen
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </nav>
  );
};

export default Navbar;