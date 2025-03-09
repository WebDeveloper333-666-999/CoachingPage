import React from 'react';
import BookingForm from '../components/BookingForm';

const Prices: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Prices</h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Soul Academy brings you back to your original power, namely self-healing. In various Prices you will learn what it means to be an energetic being, what your path means, how you can heal yourself and improve your energy so that you have more vitality.
          </p> */}
        </section>

        {/* prices Sections */}
        <section className="space-y-16">
          {/* Prices - Spiritual Coaching */}
          <div className="py-16" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
                <div className="lg:w-1/2 md:order-1">
                  <div className="relative">
                    <img
                      src="/src/assets/images/prices1.webp"
                      alt="Pain & Chakra Course"
                      className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0 lg:w-1/2 md:order-2">
                  <h2 className="text-3xl font-bold text-purple-600 mb-4">Prices - Spiritual Coaching</h2>
                  <p className='text-gray-600'>Individual lesson CHF 140.- one Zoom call / week </p>
                  
                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">Topics: </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Centering your own mind | healthy self-confidence | time management | as within, so without analysis soul - outside | increasing energy flow | communication | emotions | subconscious | consciousness | distractions | cellular coding | reprogramming | individual topics</li>
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600 ">4 - Week Change:</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>CHF 700.- only Spiritual Coaching</li>
                      <li>CHF 1200.- including 1x weekly coaching and 1x energetic healing</li>
                      <li>Incl. worksheets | Emergency call for acute challenges | Whats App contact | personal channeling</li>
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">8 - Week Change:</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>CHF 1200.- only Spiritual Coaching</li>
                      <li>CHF 2500.- including 1x weekly coaching and 1x energetic healing</li>
                      <li>Incl. worksheets | Emergency call for acute challenges | Whats App contact, personal channeling | your basic structure calculated according to your soul code</li>
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600 ">12-week change</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>CHF 1800.- only Spiritual Coaching</li>
                      <li>CHF 3500.- including 1x weekly coaching and 1x energetic healing</li>
                      <li>Incl. worksheets | Emergency call for acute challenges | WhatsApp contact | personal channeling | your basic structure calculated according to your soul code | Zodiac sign analysis | Archetype analysis | Numerology </li>
                      <li>* Tax deductible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prices - Energetic Healing Human & Animal */}
          <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
            <div className="md:order-2">
              <img
                src="/src/assets/images/prices2.webp"
                alt="Energetic Healing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">Prices - Energetic Healing Human & Animal</h2>
              <div className='mb-4'>
                <ul className="space-y-2 text-gray-600">
                  <li>Individual lesson CHF 150.- Remote treatment or Physical</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prices - Animal Communication */}
          <div className="py-16" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
                <div className="lg:w-1/2 md:order-2">
                  <div className="relative">
                    <img
                      src="/src/assets/images/prices3.webp"
                      alt="Pain & Chakra Course"
                      className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0 lg:w-1/2 md:order-1">
                  <h2 className="text-3xl font-bold text-purple-600 mb-4">Prices - Animal Communication</h2>
                  
                  <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">Individual lesson CHF 130.- </h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Send me a picture here and tell me the name of the animal so I can connect. Please don't tell me anything else. That makes my job easier. Thanks.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Become a Seelenfluesterin member and receive more tips, tricks and discounts */}
          <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-left">
            <div className="md:order-1">
              <img
                src="/src/assets/images/prices4.webp"
                alt="Energetic Healing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">Become a Seelenfluesterin member and receive more tips, tricks and discounts</h2>

              <a href='https://ko-fi.com/seelenfluesterin7777' className='text-purple-600'>https://ko-fi.com/seelenfluesterin7777</a>

              <div className='mb-4'>
                    <h3 className="text-2xl font-bold text-gray-600">Copy link Members will share and save!</h3>

                    <ul className="space-y-2 text-gray-600">
                      <li>Bronze, silver and gold have advantages. As a gold member, you benefit from <b>daily blogs at 9 p.m.</b> on a topic related to personal development or magic, which will give you expanded knowledge and tips.</li>
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