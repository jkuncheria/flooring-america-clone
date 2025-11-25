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
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
              <img 
                src="/carpetcornerlogo.jpg" 
                alt="The Carpet Corner" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              907 Diamond Lake Road<br />
              Mundelein, Illinois 60060<br />
              United States
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p><a href="tel:18475665990" className="hover:text-blue-900">(847) 566-5990</a> Office</p>
              <p><a href="mailto:thecarpetcorner@yahoo.com" className="hover:text-blue-900">thecarpetcorner@yahoo.com</a></p>
            </div>
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

           {/* Hours */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Open today</p>
              <p>09:00 am – 05:30 pm</p>
              <div className="pt-2 space-y-1">
                <p>Monday - Friday 9:00 AM - 5:30 PM</p>
                <p>Saturday 10:00 AM - 4:00 PM</p>
                <p>Sunday Closed</p>
                <p className="text-xs text-gray-500 mt-2">Holiday Hours May Vary. Please Call For Details.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 The Carpet Corner. All Rights Reserved.</p>
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