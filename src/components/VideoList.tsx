import { Play } from 'lucide-react';
import { Video } from '@/types';
import Image from 'next/image';

interface VideoListProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onSelectVideo }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
          onClick={() => onSelectVideo(video)}
        >
          <div className="relative h-40">
            <Image src={video.thumbnail} alt={video.title} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Play className="text-white" size={48} />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;