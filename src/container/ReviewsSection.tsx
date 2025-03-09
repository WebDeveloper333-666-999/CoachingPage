import React from 'react';
import { ReviewsCarousel } from './ReviewsCarousel';

function ReviewsSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ReviewsCarousel />
      </div>
    </div>
  );
}

export default ReviewsSection;