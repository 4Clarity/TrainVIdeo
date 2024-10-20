import React, { useState } from 'react';
import { Video, Plus, Search } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

const mockVideos = [
  { id: 1, title: 'Introduction to AI', duration: '10:30', thumbnail: 'https://source.unsplash.com/random/800x600?ai' },
  { id: 2, title: 'Machine Learning Basics', duration: '15:45', thumbnail: 'https://source.unsplash.com/random/800x600?machine+learning' },
  { id: 3, title: 'Deep Learning Fundamentals', duration: '20:15', thumbnail: 'https://source.unsplash.com/random/800x600?deep+learning' },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">AI-Generated Training Videos</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
              <Plus size={20} className="mr-2" />
              New Video
            </button>
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <VideoList videos={mockVideos} onSelectVideo={setSelectedVideo} />
            </div>
            <div>
              {selectedVideo && <VideoDetails video={selectedVideo} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;