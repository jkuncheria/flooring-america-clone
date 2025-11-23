import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Search, ShoppingCart, ChevronDown, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full flex flex-col font-sans z-50 relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-between items-center border-b border-gray-200">
        <div className="hidden md:flex space-x-4 text-gray-600">
          <span>Design Magazine</span>
          <span>|</span>
          <span>My Floor Style App</span>
        </div>
        <div className="flex-1 md:flex-none text-center md:text-right text-blue-900 font-semibold">
          <span className="mr-2">GET UP TO 18 MONTHS FINANCING*</span>
          <a href="#details" className="underline hover:text-blue-700">See Details</a>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-white py-4 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
               {/* Placeholder for Logo - Using Text for fidelity if image fails, but styling to match */}
               <div className="text-3xl font-bold text-blue-900 tracking-tighter">
                 FLOORING<span className="text-gray-500 font-light">AMERICA</span>
                 <span className="text-yellow-500 text-4xl leading-none">.</span>
               </div>
            </Link>
            <div className="flex items-center gap-2 md:hidden">
              <Link 
                to="/contact"
                className="p-2 border-2 border-blue-900 text-blue-900 rounded-lg"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <a 
                href="tel:18003567464"
                className="p-2 bg-blue-900 text-white rounded-lg"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button 
                className="p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Call & Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/contact"
              className="flex items-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Link>
            <a 
              href="tel:18003567464"
              className="flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>

          {/* Search & Store Locator (Desktop) - COMMENTED OUT */}
          {/* <div className="hidden md:flex flex-1 max-w-2xl mx-8 items-center space-x-4">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search for floors, inspiration, and more..." 
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            <button className="flex items-center text-blue-900 font-semibold text-sm whitespace-nowrap hover:underline">
              <MapPin className="w-4 h-4 mr-1" />
              Find a Store
            </button>
          </div> */}

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-blue-900 text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:space-x-8 text-sm font-semibold py-4 md:py-0">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="border-b border-blue-800 md:border-none last:border-none relative"
                onMouseEnter={() => item.subItems && window.innerWidth >= 768 ? setOpenDropdown(item.label) : null}
                onMouseLeave={() => item.subItems && window.innerWidth >= 768 ? setOpenDropdown(null) : null}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          setOpenDropdown(openDropdown === item.label ? null : item.label);
                        }
                      }}
                      className="w-full flex items-center justify-between py-3 md:py-4 hover:text-yellow-400 transition-colors"
                    >
                      <span>{item.label.toUpperCase()}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="md:absolute md:top-full md:left-0 md:bg-blue-800 md:rounded-lg md:shadow-xl md:min-w-[200px] md:mt-0 mt-2 md:py-2 border-t border-blue-700 md:border-t-0">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              to={subItem.href}
                              className="block px-4 py-3 hover:bg-blue-700 hover:text-yellow-400 transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.href.startsWith('#') ? (
                  <a 
                    href={item.href} 
                    className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;