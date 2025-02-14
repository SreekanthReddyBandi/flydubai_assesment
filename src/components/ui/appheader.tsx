// components/TopBar.tsx
import { FaBars, FaBell, FaTh } from "react-icons/fa";

interface AppHeaderProps {
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ className }) => {
  return (
    <div className={`w-full bg-blue-600 p-4 flex items-center justify-between ${className}`}>
      <FaBars className="text-white w-6 h-6 cursor-pointer" title="Menu" />
      <div className="flex items-center space-x-4">
        <FaBell className="text-white w-5 h-5 cursor-pointer" title="Notifications" />
        <div className="text-white">BS</div>
        <FaTh className="text-white w-5 h-5 cursor-pointer" title="Apps" />
      </div>
    </div>
  );
};

export default AppHeader;