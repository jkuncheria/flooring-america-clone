import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    rating: 5,
    text: 'The entire process was seamless from start to finish. The team helped us choose the perfect hardwood for our home, and the installation was flawless. We couldn\'t be happier with our new floors!',
    product: 'Hardwood Flooring'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Outstanding customer service and incredible selection. The visualizer tool helped us see exactly how the luxury vinyl would look in our kitchen before we committed. Highly recommend!',
    product: 'Luxury Vinyl'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'We needed flooring that could handle our three kids and two dogs. The team recommended waterproof luxury vinyl, and it\'s been perfect. Easy to clean and still looks brand new after a year!',
    product: 'Waterproof Flooring'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Denver, CO',
    rating: 5,
    text: 'Professional installation team and beautiful results. The carpet we chose feels amazing underfoot and the color matches perfectly with our decor. Worth every penny!',
    product: 'Carpet'
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    location: 'Portland, OR',
    rating: 5,
    text: 'The financing options made it easy to get the floors we wanted without breaking the bank. The staff was knowledgeable and patient with all our questions. Great experience!',
    product: 'Tile Flooring'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'From consultation to completion, everything exceeded our expectations. The laminate flooring looks like real wood but was much more affordable. Couldn\'t be happier!',
    product: 'Laminate Flooring'
  }
];

const Testimonials: React.FC = () => {
  const [showFallback, setShowFallback] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if widget loads successfully
    const checkWidgetLoaded = () => {
      if (widgetRef.current) {
        // Check if widget has content - look for Elfsight widget elements
        const hasContent = 
          widgetRef.current.children.length > 0 || 
          widgetRef.current.querySelector('.elfsight-widget') !== null ||
          widgetRef.current.offsetHeight > 100; // Widget should have substantial height
        
        if (hasContent) {
          // Widget loaded successfully, hide fallback
          setShowFallback(false);
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
          }
          return true;
        }
      }
      return false;
    };

    // Start checking after a delay to allow widget to load
    const initialTimeout = setTimeout(() => {
      // Check periodically for widget content
      checkIntervalRef.current = setInterval(() => {
        checkWidgetLoaded();
      }, 500);

      // If widget doesn't load within 6 seconds, show fallback
      setTimeout(() => {
        if (!checkWidgetLoaded()) {
          setShowFallback(true);
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
          }
        }
      }, 6000);
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const renderFallbackTestimonials = () => (
    <>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-12 h-12 text-blue-900" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
              "{testimonial.text}"
            </p>

            {/* Product Badge */}
            {testimonial.product && (
              <div className="mb-4">
                <span className="inline-block bg-blue-50 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.product}
                </span>
              </div>
            )}

            {/* Customer Info */}
            <div className="border-t border-gray-100 pt-4">
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Store Locations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-900 mb-2">50K+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-900 mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-900 mb-2">25+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">WHAT OUR CUSTOMERS SAY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Trusted by Thousands of Happy Homeowners
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See what real customers have to say about their Flooring America experience.
          </p>
        </div>

        {/* Elfsight Widget Container */}
        <div 
          ref={widgetRef}
          className="elfsight-app-03c5492a-a64e-43c7-8dc3-cc7619bbf80d" 
          data-elfsight-app-lazy
          style={{ minHeight: showFallback ? '0' : '400px' }}
        ></div>

        {/* Fallback Testimonials - Show if widget doesn't load */}
        {showFallback && renderFallbackTestimonials()}
      </div>
    </section>
  );
};

export default Testimonials;

