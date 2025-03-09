import React from 'react';

interface VideoFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: 'date' | 'title';
  setSortBy: (sort: 'date' | 'title') => void;
}

export const VideoFilter: React.FC<VideoFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-medium">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
        >
          <option value="all">All Videos</option>
          <option value="podcast">Podcasts</option>
          <option value="meditation">Meditations</option>
        </select>
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-medium">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
          className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
        >
          <option value="date">Latest</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};