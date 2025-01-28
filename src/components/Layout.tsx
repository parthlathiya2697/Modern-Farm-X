import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Services', href: '/services' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Contact', href: '/contact' },
];

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <Link to="/" className="ml-2 text-xl font-bold text-gray-800">
                Modern FarmX
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-800 hover:text-green-600 font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-800" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;