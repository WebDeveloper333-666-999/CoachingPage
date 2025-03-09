import React, { useState } from 'react';
import { YouTubeCard } from '../components/YouTubeCard';
import { VideoFilter } from '../components/VideoFilter';

export interface Video {
  id: string;
  title: string;
  description: string;
  category: 'podcast' | 'meditation';
  thumbnailUrl: string;
  embedUrl: string;
  date: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'High sensitivity your gift',
    description: 'Are you highly sensitive? Do you feel things more intensely? Are scents, tastes and moods more intense for you? Do you sometimes feel like you don\'t quite fit in with this society?',
    category: 'podcast',
    thumbnailUrl: '/video-thumbnail-1.jpg',
    embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    date: '2023-08-01'
  },
  {
    id: '2',
    title: 'Meditation: Letting worries fly',
    description: 'Hello dear soul, If you sometimes have a lot of worries at once because life sees a bit of potential in you :), then maybe you just need something or someone to take your worries away.',
    category: 'meditation',
    thumbnailUrl: '/video-thumbnail-2.jpg',
    embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    date: '2023-07-15'
  },
  // Add more videos here
];

const ITEMS_PER_PAGE = 6;

export const YouTubeSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const filteredVideos = videos.filter(video => 
    selectedCategory === 'all' || video.category === selectedCategory
  );

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  const totalPages = Math.ceil(sortedVideos.length / ITEMS_PER_PAGE);
  const currentVideos = sortedVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-light text-purple-500 mb-8">YouTube Channel</h2>
      
      <VideoFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {currentVideos.map(video => (
          <YouTubeCard key={video.id} video={video} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-md ${
              currentPage === page
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};