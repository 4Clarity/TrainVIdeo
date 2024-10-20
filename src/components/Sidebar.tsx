import { FolderOpen, Calendar, Users, Settings } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 border-r border-gray-200">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/projects" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
              <FolderOpen size={20} />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/schedule" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
              <Calendar size={20} />
              <span>Schedule</span>
            </Link>
          </li>
          <li>
            <Link href="/team" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
              <Users size={20} />
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;