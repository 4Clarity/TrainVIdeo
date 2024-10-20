import { Clock, Tag, Edit2 } from 'lucide-react';
import { Video } from '@/types';
import Image from 'next/image';

interface VideoDetailsProps {
  video: Video;
}

const VideoDetails: React.FC<VideoDetailsProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative h-48 mb-4">
        <Image src={video.thumbnail} alt={video.title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{video.title}</h2>
      <div className="flex items-center text-gray-600 mb-4">
        <Clock size={16} className="mr-2" />
        <span>{video.duration}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Tag size={16} className="mr-2" />
        <span>AI, Training, Technology</span>
      </div>
      <p className="text-gray-700 mb-4">
        This AI-generated training video covers essential concepts and practical applications in the field.
        Perfect for beginners and intermediate learners looking to expand their knowledge.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
        <Edit2 size={16} className="mr-2" />
        Edit Video
      </button>
    </div>
  );
};

export default VideoDetails;