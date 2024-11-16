import { Clock, Heart, MoreVertical, Play } from 'lucide-react';
import React from 'react';

interface PlaylistProps {
  coverUrl: string;
  title: string;
  description: string;
  duration: string;
  likes: string;
}

export function PlaylistCard({ coverUrl, title, description, duration, likes }: PlaylistProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden mb-4 hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={coverUrl} 
          alt={title} 
          className="w-full aspect-video object-cover"
        />
        <button className="absolute bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors">
          <Play className="w-6 h-6 text-white fill-current" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
          </div>
          <button className="ml-4">
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center ml-4">
            <Heart className="w-4 h-4 mr-1" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}