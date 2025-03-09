import React from 'react';
import AudioPlayer from './AudioPlayer';

interface ReviewsAudioCardProps {
    // Define your props here
    src: string;
    content: string;
}

const ReviewsAudioCard: React.FC<ReviewsAudioCardProps> = ({
    src = "some_url",
    content = "some_content",
}) => {
    return (
        <div className='mb-10'>
            <div className="max-w-5xl mx-auto">
            <AudioPlayer src={src} className="bg-gray-500 my-5 max-w-3xl mx-auto" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              { content }
            </p>
          </div>
        </div>
    );
};

export default ReviewsAudioCard;