import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-blue-900 tracking-tighter mb-4">
                 FLOORING<span className="text-gray-500 font-light">AMERICA</span>
                 <span className="text-yellow-500 text-3xl">.</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              With over 500 locations nationwide, we are your local neighborhood flooring experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-900 transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/hardwood" onClick={scrollToTop} className="hover:text-blue-900">
                  Hardwood
                </Link>
              </li>
              <li>
                <Link to="/carpet" onClick={scrollToTop} className="hover:text-blue-900">
                  Carpet
                </Link>
              </li>
              <li>
                <Link to="/luxury-vinyl" onClick={scrollToTop} className="hover:text-blue-900">
                  Luxury Vinyl
                </Link>
              </li>
              <li>
                <Link to="/tile" onClick={scrollToTop} className="hover:text-blue-900">
                  Tile
                </Link>
              </li>
              <li>
                <Link to="/laminate" onClick={scrollToTop} className="hover:text-blue-900">
                  Laminate
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-blue-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/financing" onClick={scrollToTop} className="hover:text-blue-900">
                  Financing
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-blue-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Stay Connected</h4>
            <p className="text-sm text-gray-600 mb-4">Sign up for our newsletter to get the latest trends and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:border-blue-900"
              />
              <button className="bg-blue-900 text-white px-4 py-2 text-sm font-bold rounded-r hover:bg-blue-800">
                JOIN
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Hometown Flooring. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;