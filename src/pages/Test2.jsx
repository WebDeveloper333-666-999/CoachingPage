import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingForm from '../components/BookingForm';

export default function Test2() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-purple-600">Seelenacademy</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Online Course - Seelenacademy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Soul Academy brings you back to your original power, namely self-healing. In various courses you will learn what it means to be an energetic being, what your path means, how you can heal yourself and improve your energy so that you have more vitality.
          </p>
        </section>

        {/* Course Sections */}
        <section className="space-y-16">
          {/* Pain & Chakra Course */}
          <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-right">
            <img
              src="/path-to-your-image.jpg"
              alt="Pain & Chakra Course"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Pain & Chakra Course</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• You want to expand your knowledge about the chakras</li>
                <li>• Want to know which chakras can cause physical complaints</li>
                <li>• Want to know which chakras can cause which mental problems</li>
                <li>• How to cleanse the chakras</li>
                <li>• How to strengthen the chakras</li>
              </ul>
              <p className="mt-4 text-gray-800">Pain & Chakra Course: CHF 480,-</p>
            </div>
          </div>

          {/* Complete Course Energetic Healing */}
          <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
            <div className="md:order-2">
              <img
                src="/path-to-your-image.jpg"
                alt="Energetic Healing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Complete Course Energetic Healing</h3>
              <p className="text-gray-600 mb-4">
                Energetic healing is more than just laying on of hands. It is an attitude. There are laws that must be followed and rules that must not be disregarded. That is why our course is divided into theory and practice.
              </p>
              <p className="text-gray-800">Complete Energetic Healing Course CHF 950.-</p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Course</h2>
          <BookingForm />
        </section>
      </main>
    </div>
  );
}