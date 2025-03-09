import React from 'react';
import Slider from 'react-slick';
import { ReviewCard } from '../components/ReviewCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomNextArrow, CustomPrevArrow } from '../components/CustomSliderProps';

const reviews = [
  {
    id: 1,
    name: 'TheFusely',
    avatar: '/src/assets/images/test-avatar.jpg',
    date: new Date('2023-08-15'),
    stars: 5,
    content: 'It was a very nice and interesting new experience for me.',
    verified: true,
  },

  {
    id: 1,
    name: 'TheFusely',
    avatar: '/src/assets/images/test-avatar2.jpg',
    date: new Date('2023-08-15'),
    stars: 5,
    content: 'It was a very nice and interesting new experience for me.',
    verified: true,
  },

  {
    id: 1,
    name: 'TheFusely',
    avatar: '/src/assets/images/test-avatar2.jpg',
    date: new Date('2023-08-15'),
    stars: 4,
    content: 'It was a very nice and interesting new experience for me.',
    verified: true,
  },

  {
    id: 1,
    name: 'TheFusely',
    avatar: '/src/assets/images/test-avatar.jpg',
    date: new Date('2023-08-15'),
    stars: 5,
    content: 'It was a very nice and interesting new experience for me.',
    verified: true,
  },
  // Add more reviews here
];

export const ReviewsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleRateClick = () => {
    window.open(
      'https://www.google.com/search?q=Seelenfluesterin+%7C+Energetisches+Heilen+Mensch+und+Tier%2C+Zwinglistrasse+6%2C+9000+St.+Gallen%2C+Switzerland',
      '_blank'
    );
  };

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8 flex-col">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-8 mb-2"
          />
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">★</span>
            <span className="font-semibold">4.8 out of 5</span>
            <span className="text-gray-600">based on 20 reviews</span>
          </div>
          <button
            onClick={handleRateClick}
            className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
          >
            Rate Seelenfluesterin on Google
          </button>
        </div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Slider>
      </div>
    </div>
  );
}