import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaHeart, FaStar, FaBook, FaDog, FaCertificate } from 'react-icons/fa';

export default function About() {
  const education = [
    {
      title: "Mediumship training",
      items: [
        "Medium Further Education in London - Arthur Findlay College London (2024)",
        "Extension: Medium Continuing Education (ONLINE) - Arthur Findlay College London",
        "Healer Medium Training in London Arthur Findlay (2023)",
        "Trance Speaking Arthur Findlay",
        "Live in the Key Arthur Findlay"
      ]
    },
    {
      title: "Quantum physics training",
      items: [
        "Quantum Physics and Spontaneous Healing at the Quantum Level",
        "The Secret of Mitochondria"
      ]
    },
    {
      title: "Animal Communication",
      items: [
        "Animal Communication Course (2024) - M. Link",
        "Animal Communication Course Intensive 2.0 September 2024 - M. Link",
        "Basics of speaking about spiritual level with animals",
        "Talking to deceased animals, body scanning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-purple-600 mb-8">About Me</h1>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <FaQuoteLeft className="absolute -top-4 -left-4 text-purple-200 text-4xl" />
              <p className="text-xl text-gray-600 italic mb-4">
                "A lightbearer is only as good as he/she has gone through the dark hours"
              </p>
              <p className="text-xl text-gray-600 italic">
                "He who has not experienced his dark side will not recognize his light"
              </p>
              <FaQuoteRight className="absolute -bottom-4 -right-4 text-purple-200 text-4xl" />
            </div>
            <p className="text-gray-500 mt-4">- Soul whisperer Sarah</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaHeart className="text-purple-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Basic Attitude</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaStar className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">"I'm not yet where I want to be, but step by step, I'm following my soul plan"</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Honesty is one of my basic principles</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Love is the most important thing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaDog className="text-purple-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Animal Companion</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Susana has been my faithful companion for 16 years. Waddington accompanies 
                Susana with special energy from the London School of Mediumship.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaBook className="text-purple-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Professional Profile</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Two teaching courses - Restoration specialist / Businesswoman
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Study: Social Pedagogy 1st
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Languages: DE, FR, EN, IT
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-purple-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Character Traits</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Heart person
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Harmony-loving
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Friendly
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-400 mr-2" />
                  Versatile interests
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">Education & Training</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-6">
                  <FaCertificate className="text-purple-500 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaStar className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}