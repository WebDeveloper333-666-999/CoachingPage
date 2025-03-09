import React from 'react';
import { ReviewsCarousel } from '../container/ReviewsCarousel';
import { ProductCard } from '../components/ProductCard';
import { CartModal } from '../components/CartModal';
import { useCartStore } from '../store/cartStore';
import { BarChart3, Globe2, Palette, Smartphone } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Ritual Candle - Farewell Candle',
    price: 28.90,
    image: '/candle.jpg',
    description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
  },
  // Add more products here
];

function Test() {
  const toggleCart = useCartStore((state) => state.toggleCart);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">Seelenfluesterin</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleCart}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Reviews Section */}
      <ReviewsCarousel />

      {/* Shop Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-16 bg-white-50" data-aos="fade-left">
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

      {/* Cart Modal */}
      <CartModal />
    </div>
  );
}

export default Test;