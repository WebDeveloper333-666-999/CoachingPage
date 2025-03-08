import { Heart, Brain, MessageCircle, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-12 w-12 text-purple-600" />,
    title: "Spirituelles Coaching",
    description: "Entdecken Sie Ihre innere Kraft und spirituelle Führung durch personalisiertes Coaching.",
    price: "120€",
    duration: "60 min"
  },
  {
    icon: <Heart className="h-12 w-12 text-purple-600" />,
    title: "Energetic Healing",
    description: "Harmonisierung Ihrer Energiezentren und Auflösung von Blockaden.",
    price: "150€",
    duration: "90 min"
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-purple-600" />,
    title: "Seelen Kommunikation",
    description: "Tiefgehende Gespräche zur Verbindung mit Ihrer inneren Weisheit.",
    price: "100€",
    duration: "45 min"
  },
  {
    icon: <Sparkles className="h-12 w-12 text-purple-600" />,
    title: "Aura Clearing",
    description: "Reinigung und Stärkung Ihrer energetischen Felder.",
    price: "130€",
    duration: "75 min"
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Eine wundervolle Erfahrung! Die Sitzung hat mir geholfen, Klarheit zu finden.",
    rating: 5
  },
  {
    name: "Michael K.",
    text: "Sehr professionell und einfühlsam. Ich fühle mich wie neugeboren.",
    rating: 5
  },
  {
    name: "Lisa B.",
    text: "Die beste Entscheidung, die ich treffen konnte. Danke für die Unterstützung!",
    rating: 5
  }
];

function Services() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unsere Dienstleistungen</h1>
          <p className="text-xl text-gray-600">Entdecken Sie den Weg zu innerem Frieden und Harmonie</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-purple-50 rounded-xl p-4 inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-purple-600 font-semibold text-lg">{service.price}</span>
                  <span className="text-gray-500 ml-2">/ {service.duration}</span>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
                  Buchen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Ihre Transformation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Lassen Sie uns gemeinsam Ihren Weg zu mehr Harmonie und innerem Frieden beginnen.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">
            Jetzt Termin vereinbaren
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;