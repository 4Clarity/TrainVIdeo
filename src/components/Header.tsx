import { Video } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Video className="text-blue-500 mr-2" size={24} />
          <h1 className="text-xl font-bold text-gray-800">TrainVid AI</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-500">Dashboard</Link></li>
            <li><Link href="/projects" className="text-gray-600 hover:text-blue-500">Projects</Link></li>
            <li><Link href="/settings" className="text-gray-600 hover:text-blue-500">Settings</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;