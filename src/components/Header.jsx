import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Geometric Design Tool</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/generate" className="text-gray-600 hover:text-gray-900">Generate Design</Link></li>
              <li><Link to="/my-designs" className="text-gray-600 hover:text-gray-900">My Designs</Link></li>
              <li><Link to="/bug-finder" className="text-gray-600 hover:text-gray-900">Bug Finder</Link></li>
              <li><Link to="/settings" className="text-gray-600 hover:text-gray-900">Settings</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;