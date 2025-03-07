import React, { useState } from 'react';
import { 
  Menu, 
  ShoppingCart, 
  Globe2, 
  Smartphone, 
  Palette, 
  BarChart3,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  X
} from 'lucide-react';
import Carousel from './components/Carousel';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Globe2 className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-purple-600 font-medium border-b-2 border-purple-600">Startseite</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-all duration-200">Über mich</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-all duration-200">Dienstleistungen</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-all duration-200">Preise</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-all duration-200">Online Kurse</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-all duration-200">Online Shop</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition-all duration-200">Kontakt</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-white text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 border border-gray-200 transition duration-200">
                Login
              </button>
              <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200 transform hover:scale-105">
                Registrieren
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
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-purple-600 bg-purple-50">Startseite</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Über mich</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Dienstleistungen</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Preise</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Online Kurse</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Online Shop</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Kontakt</a>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-white text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 border border-gray-200">
                  Login
                </button>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
                  Registrieren
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Carousel */}
      <Carousel />

      {/* Welcome Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Welcome"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Herzlich Willkommen liebe Seele
              </h2>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Hier beginnt unsere Reise.<br />
                Deine Seele hat dich hierher geführt. Schön, dass du da bist und dass es dich gibt.
              </p>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Gleich als erstes möchte ich dich mit dieser kleiner Meditation beschenken. Geniesse es!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">
                  Audio abspielen
                </button>
                <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl text-sm font-medium hover:bg-purple-50 transform hover:scale-105 transition duration-200">
                  Dienstleistungen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                icon: <Globe2 className="h-12 w-12 text-purple-600" />,
                title: "Web Development",
                description: "We build responsive and user-friendly websites tailored to your business needs."
              },
              {
                icon: <Smartphone className="h-12 w-12 text-purple-600" />,
                title: "Mobile App Development",
                description: "We create cross-platform mobile applications for iOS and Android."
              },
              {
                icon: <Palette className="h-12 w-12 text-purple-600" />,
                title: "UI/UX Design",
                description: "We design intuitive and visually appealing interfaces for your digital products."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
                title: "Digital Marketing",
                description: "We help you grow your business with effective digital marketing strategies."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-50 rounded-xl p-4 inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Über mich</h2>
              <p className="mt-6 text-xl text-gray-500 italic">
                "Wer seine Schattenseiten nicht erfahren hat, wird sein Licht nicht erkennen." Seelenflüsterin Sarah
              </p>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Ich habe eine Fähigkeit, die ich neu entdecken durfte nämlich meine Medialität.
              </p>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Dazu kommen viele Tools aus der Persönlichkeitsentwicklung und der Psychologie.
              </p>
              <button className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">
                Über mich
              </button>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="About"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
}

export default App;