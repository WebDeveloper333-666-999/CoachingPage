import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface ReviewCardProps {
  avatar: string;
  name: string;
  date: Date;
  stars: number;
  content: string;
  verified?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  avatar,
  name,
  date,
  stars,
  content,
  verified = false,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-2">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold text-gray-800">{name}</h3>
            {verified && (
              <svg
                className="w-5 h-5 text-purple-500 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <p className="text-gray-500 text-sm">
            {formatDistanceToNow(date, { addSuffix: true })}
          </p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < stars ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}