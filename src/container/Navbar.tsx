import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { 
    Menu, 
    ShoppingCart, 
  } from 'lucide-react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

import { useCartStore } from '../store/cartStore';


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const { items } = useCartStore();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/services', label: 'Services' },
    { path: '/courses', label: 'Online Courses' },
    { path: '/shop', label: 'Online Shop' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              {/* <Globe2 className="h-8 w-8 text-purple-600" /> */}
              <img src="src/assets/images/logo3.png" alt="Logo" className="h-16 w-16 p-1" />
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
              onClick={() => setIsLoginOpen(true)}
              className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200 transform hover:scale-105"
            >
              Login
            </button>

            <button
              onClick={() => setIsRegisterOpen(true)}
              className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200 transform hover:scale-105"
            >
              Register
            </button>

            <div className="relative" onClick={toggleCart}>
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-purple-600 transition duration-200 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse cursor-pointer">
                { items.length }
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
                setIsLoginOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 mt-4"
            >
              Login
            </button>

            <button
              onClick={() => {
                setIsRegisterOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 mt-4"
            >
              Register
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Register Modal */}
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </nav>
  );
};

export default Navbar;