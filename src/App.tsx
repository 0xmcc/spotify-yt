import React from 'react';
import { PlaylistCard } from './components/PlaylistCard';
import { SongPollGrid } from './components/SongPollGrid';

const playlists = [
  {
    coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2400",
    title: "Top Hits 2024: The Ultimate Collection",
    description: "The biggest hits and trending tracks that are shaping the sound of 2024. Updated weekly with fresh beats!",
    duration: "4h 32m",
    likes: "245K"
  },
  {
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=2400",
    title: "Indie Discoveries",
    description: "Emerging artists and underground gems from the independent music scene. Your next favorite band is here.",
    duration: "3h 15m",
    likes: "128K"
  }
];

const polls = [
  {
    question: "Best Album of the Month?",
    options: [
      {
        albumCover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Midnight Dreams",
        artist: "Aurora Lights",
        votes: 58
      },
      {
        albumCover: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Electric Soul",
        artist: "Neon Pulse",
        votes: 42
      }
    ]
  },
  {
    question: "Which Remix Hits Harder?",
    options: [
      {
        albumCover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Sunset Groove (Club Mix)",
        artist: "Wave Riders",
        votes: 63
      },
      {
        albumCover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Night Drive (Bass Boost)",
        artist: "Metro Beats",
        votes: 37
      }
    ]
  },
  {
    question: "Best New Artist Debut?",
    options: [
      {
        albumCover: "https://images.unsplash.com/photo-1482442120256-9c03866de390?auto=format&fit=crop&q=80&w=1200",
        songTitle: "First Light",
        artist: "Dawn Chorus",
        votes: 51
      },
      {
        albumCover: "https://images.unsplash.com/photo-1460667262436-cf19894f4774?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Urban Poetry",
        artist: "City Lights",
        votes: 49
      }
    ]
  },
  {
    question: "Song of the Summer?",
    options: [
      {
        albumCover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Beach Memories",
        artist: "Coastal Waves",
        votes: 72
      },
      {
        albumCover: "https://images.unsplash.com/photo-1461784180009-21121b2f204c?auto=format&fit=crop&q=80&w=1200",
        songTitle: "Summer Nights",
        artist: "Sunset Club",
        votes: 28
      }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Discover</h1>
        
        <PlaylistCard {...playlists[0]} />
        
        <h2 className="text-xl font-bold mb-4">What's Your Pick? 🎵</h2>
        <SongPollGrid polls={polls.slice(0, 4)} />
        
        <PlaylistCard {...playlists[1]} />
        
        <h2 className="text-xl font-bold my-4">More Polls</h2>
        <SongPollGrid polls={polls.slice(2, 4)} />
      </div>
    </div>
  );
}

export default App;