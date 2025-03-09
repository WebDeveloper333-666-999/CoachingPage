import React, { useState } from 'react';
import type { Video } from './YouTubeSection';

interface YouTubeCardProps {
  video: Video;
}

export const YouTubeCard: React.FC<YouTubeCardProps> = ({ video }) => {
  const [showCopyLink, setShowCopyLink] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(video.embedUrl);
      setShowCopyLink(true);
      setTimeout(() => setShowCopyLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <div className="relative pt-[56.25%]">
          <iframe
            src={video.embedUrl}
            className="absolute inset-0 w-full h-full"
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <button
          onClick={handleCopyLink}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          title="Copy video link"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>

        {showCopyLink && (
          <div className="absolute bottom-16 right-4 bg-black text-white px-3 py-1 rounded text-sm">
            Link copied!
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
        <p className="text-gray-600 text-sm">{video.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-purple-500 capitalize">{video.category}</span>
          <span className="text-sm text-gray-500">
            {new Date(video.date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};