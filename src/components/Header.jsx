import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">The Opus Initiative</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-purple-600">Programs</Link>
            <Link to="/tutoring" className="text-gray-700 hover:text-purple-600">Tutoring</Link>
            <Link to="/events" className="text-gray-700 hover:text-purple-600">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
              <Link to="/programs" className="text-gray-700 hover:text-purple-600">Programs</Link>
              <Link to="/tutoring" className="text-gray-700 hover:text-purple-600">Tutoring</Link>
              <Link to="/events" className="text-gray-700 hover:text-purple-600">Events</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
 