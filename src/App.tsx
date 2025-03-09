import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Courses from './pages/Courses';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Test from './pages/Test';
import { CartModal } from './components/CartModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/test" element={<Test />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Booking Modal */}
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

        {/* Cart Modal */}
        <CartModal />

        {/* Booking Button */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="fixed -right-8 top-1/2 rotate-90 hidden md:block bg-purple-600 opacity-50 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-70 hover:opacity-100 transition duration-200 transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </Router>
  );
}

export default App;