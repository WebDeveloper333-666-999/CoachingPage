import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  duration: string;
  audioUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  duration,
  audioUrl
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <div className="bg-purple-50 rounded-xl p-4 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {audioUrl && (
        <div className="mb-4">
          <AudioPlayer src={audioUrl} className="bg-gray-50" />
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div>
          <span className="text-purple-600 font-semibold text-lg">{price}</span>
          <span className="text-gray-500 ml-2">/ {duration}</span>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
          Buchen
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;