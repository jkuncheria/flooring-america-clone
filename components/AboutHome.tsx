import React from 'react';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/carpet-corner-building.png" 
                alt="The Carpet Corner Building - Mundelein, Illinois" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Family Owned and Operated since 1974
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Carpet Corner, in Mundelein, Illinois, is the area's leading flooring specialist serving Mundelein, Libertyville, Lake Forest and surrounding areas since 1974. We offer carpet, hardwood, laminate, tile, vinyl and more.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Family-Owned & Operated</h3>
                  <p className="text-gray-600">Over 50 years of trusted service in the Mundelein area. We treat your home like our own.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Conveniently Located</h3>
                  <p className="text-gray-600">907 Diamond Lake Road, Mundelein, IL 60060 - Located Near Diamond Lake</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Open Regular Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 9:00 AM - 5:30 PM | Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-blue-900 mb-2">Our Brands</h3>
              <p className="text-gray-700 text-sm">
                We carry a variety of top-quality brands including <strong>Mohawk</strong>, <strong>Shaw</strong>, <strong>Dream Weaver</strong>, <strong>Dixie</strong>, <strong>Royal Dutch by Stanton</strong>, and more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

