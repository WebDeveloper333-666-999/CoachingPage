import React from 'react';
import { FaBook, FaHandHoldingHeart, FaDog, FaMagic } from 'react-icons/fa';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  price?: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: FaBook,
      title: "Spiritual Coaching",
      description: "You have already mastered many of life's tasks. But what is your current challenge? Your spiritual team knows what to do. I'd be happy to ask and together we'll find your individual solution.",
      price: "Contact for pricing"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Energetic Healing Humans and Animals",
      description: "If you have physical pain that no one can explain or you want to cleanse and strengthen your energy centers (chakras), then energetic healing is the right thing for you. Also for your pet.",
      price: "Contact for pricing"
    },
    {
      icon: FaDog,
      title: "Animal Communication",
      description: "Is your beloved pet not feeling well or is it displaying new behavior that you cannot explain? Together we can ask it what it needs.",
      price: "Contact for pricing"
    },
    {
      icon: FaMagic,
      title: "1 Month - Game Changer",
      description: "With my channeled module you will change your life immediately in one month. Why? Because all levels of consciousness are integrated, no matter where your challenges are.",
      price: "Register NOW"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Services</h2>
          <p className="text-xl text-gray-600">
            Completely new. Do you want a <span className="font-semibold">card reading</span>?
            If you need immediate support, call us on our <span className="font-semibold">hotline 0901 881 881</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <service.icon className="text-purple-500 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                  {service.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}