import React from 'react';
import { Vote } from 'lucide-react';

interface PollOption {
  albumCover: string;
  songTitle: string;
  artist: string;
  votes: number;
}

interface SongPollProps {
  question: string;
  options: PollOption[];
}

export function SongPollGrid({ polls }: { polls: SongPollProps[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 my-6">
      {polls.map((poll, index) => (
        <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-sm mb-3">{poll.question}</h3>
          <div className="grid grid-cols-2 gap-2">
            {poll.options.map((option, optIndex) => (
              <button 
                key={optIndex}
                className="relative group transition-transform hover:scale-105"
              >
                <img 
                  src={option.albumCover} 
                  alt={option.songTitle}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center">
                  <Vote className="w-6 h-6 text-white" />
                </div>
                <div className="mt-2">
                  <p className="font-medium text-xs line-clamp-1">{option.songTitle}</p>
                  <p className="text-gray-500 text-xs line-clamp-1">{option.artist}</p>
                  <p className="text-xs text-green-500 mt-1">{option.votes}%</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}