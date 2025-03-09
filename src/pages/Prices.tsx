import React from 'react';
import BookingForm from '../components/BookingForm';

const Prices: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Online Course - Seelenacademy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Soul Academy brings you back to your original power, namely self-healing. In various Prices you will learn what it means to be an energetic being, what your path means, how you can heal yourself and improve your energy so that you have more vitality.
          </p>
        </section>

        {/* Course Sections */}
        <section className="space-y-16">
          {/* Pain & Chakra Course */}
          <div className="py-16" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
                <div className="lg:w-1/2 md:order-2">
                  <div className="relative">
                    <img
                      src="/src/assets/images/course21.webp"
                      alt="Pain & Chakra Course"
                      className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0 lg:w-1/2 md:order-1">
                  <h2 className="text-3xl font-bold text-purple-600 mb-4">1. Pain & Chakra Course</h2>
                  
                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">This course is for you if...</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>• You want to expand your knowledge about the chakras</li>
                      <li>• Want to know which chakras can cause physical complaints</li>
                      <li>• Want to know which chakras can cause which mental problems</li>
                      <li>• How to cleanse the chakras</li>
                      <li>• If you feel unwell, tired and weak but there is no reason for it</li>
                      <li>• want to advance your self-healing</li>
                      <li>• Prerequisite for understanding the Energetic Healing Course</li>
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600 ">energy exchange:</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Pain & Chakra Course: CHF 480.-</li>
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">How does it work:</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Book the course using the form below</li>
                      <li>Pay the course in advance via Twint</li>
                      <li>After payment you will receive a link and a password and off you go</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Course Energetic Healing */}
          <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
            <div className="md:order-1">
              <img
                src="/src/assets/images/course22.webp"
                alt="Energetic Healing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">2. Complete Course Energetic Healing</h2>
              <div className='mb-4'>
                <ul className="space-y-2 text-gray-600">
                  <li>Energetic healing is more than just laying on of hands. It is an attitude. There are laws that must be followed and rules that must not be disregarded. That is why our course is divided into theory and practice.<br/>
                  Please note that the Chakra course provides a preliminary understanding of the Energetic Healer course.</li>
                </ul>
              </div>

              <div className='mb-4'>
                <h3 className="text-2xl font-bold text-gray-600">energy exchange:</h3>

                <ul className="space-y-2 text-gray-600">
                  <li>Complete Energetic Healing Course CHF 950.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Energetic Healing - Theory */}
          <div className="py-16" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
                <div className="lg:w-1/2 md:order-2">
                  <div className="relative">
                    <img
                      src="/src/assets/images/course23.webp"
                      alt="Pain & Chakra Course"
                      className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0 lg:w-1/2 md:order-1">
                  <h2 className="text-3xl font-bold text-purple-600 mb-4">2.1 Energetic Healing - Theory</h2>
                  
                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">This course is for you if...</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>• You want to expand your knowledge about energetic healing</li>
                      <li>• Want to know how energetic healing works</li>
                      <li>• Want to help yourself in your everyday life</li>
                      <li>• Want to support your loved ones</li>
                      <li>• Want to help your beloved animal</li>
                      <li>• Want to increase your energy | vibration</li>
                      <li>• Want to get closer to your soul's purpose</li>
                      <li>• Want to advance your self-healing</li>
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600 ">How does it work:</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>• Book the course using the form below</li>
                      <li>• Pay the course in advance via Twint</li>
                      <li>• After payment you will receive a link and a password and off you go</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energetic Healing - Practice */}
          <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
            <div className="md:order-1">
              <img
                src="/src/assets/images/course24.webp"
                alt="Energetic Healing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">2.2 Energetic Healing - Practice</h2>

              <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">This course is for you if...</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>• You want to expand your knowledge about energetic healing</li>
                      <li>• Want to know how energetic healing works</li>
                      <li>• Want to help yourself in your everyday life</li>
                      <li>• Want to support your loved ones</li>
                      <li>• Want to help your beloved animal</li>
                      <li>• Want to increase your energy | vibration</li>
                      <li>• Want to get closer to your soul's purpose</li>
                      <li>• Want to advance your self-healing</li>
                    </ul>
              </div>

              <div className='mb-4'>
                <h3 className="text-2xl font-bold text-gray-600 ">How does it work:</h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Book the course using the form below</li>
                  <li>• Pay the course in advance via Twint</li>
                  <li>• After payment you will receive a link and a password and off you go</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">Book Your Course</h2>
          <BookingForm />
        </section>
      </main>
    </div>
  );
};

export default Prices;