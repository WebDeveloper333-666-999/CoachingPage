import AudioPlayer from '../components/AudioPlayer';
import Carousel from '../components/Carousel';
import FAQAccordion from '../components/FAQAccordion';
import faqItems from '../constant/faq';
import { NavLink } from 'react-router-dom';
import ReviewsSection from '../container/ReviewsSection';
import BookingForm from '../components/BookingForm';


function Home() {

  return (
    <div>
      {/* Hero Section with Carousel */}
      <Carousel />

      {/* Welcome Section */}
      <div className="py-16 bg-white" data-aos="fade-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/src/assets/images/1.jpg"
                  alt="Welcome"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome dear soul
              </h2>

              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                This is where our journey begins.<br />
                Your soul has led you here. It's great that you are here and that you exist. 
              </p>

              <p className="mt-4 text-xl text-gray-500 leading-relaxed">
                First of all, I would like to give you this little meditation. Enjoy it!
              </p>

              <AudioPlayer src={""} className="bg-gray-50 mt-5" />

              <div className="mt-8 flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">
                  Audio abspielen
                </button>
                <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl text-sm font-medium hover:bg-purple-50 transform hover:scale-105 transition duration-200">
                  Services
                </button> */}
  
                <NavLink to="/services" className="mt-2 bg-purple-600 text-white px-8 py-4 rounded-xl text-md font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">Services</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50" data-aos="fade-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
              <p className="mt-6 text-xl text-gray-500 italic">
                "He who has not experienced his dark side will not recognize his light." Soul whisperer Sarah
              </p>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
               I have a skill that I have rediscovered, namely my mediumship.
              </p>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
               There are also many tools from personality development and psychology.
              </p>
              <button className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl text-md font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">
                About Me
              </button>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <img
                  src="/src/assets/images/2.jpg"
                  alt="About"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50" data-aos="fade-up">
        <ReviewsSection />
      </div>
      
      {/* FAQ Section */}
      <section className="py-12 px-4" data-aos="fade-up">
        <FAQAccordion items={faqItems} />
      </section>
    </div>
  );
}

export default Home;