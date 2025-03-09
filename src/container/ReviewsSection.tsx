import React from 'react';
import { ReviewsCarousel } from './ReviewsCarousel';
import { NavLink } from 'react-router-dom';
import ReviewsAudioCard from '../components/ReviewsAudioCard';
import ReviewsAudioItems from '../constant/reviewsAudio';

function ReviewsSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ReviewsCarousel />

        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-purple-500 mb-4">Customer reviews of all services</h2>

          { ReviewsAudioItems.map((val) => {
            return <ReviewsAudioCard src={val.src} content={val.content} />
          }) }
        </section>

        <NavLink to="/contact" className="block text-center max-w-4xl mx-auto bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">Contact Me Now</NavLink>
      </div>
    </div>
  );
}

export default ReviewsSection;