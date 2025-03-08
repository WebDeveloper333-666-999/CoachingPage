import Carousel from '../components/Carousel';
import { 
  Globe2, 
  Smartphone, 
  Palette, 
  BarChart3,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;