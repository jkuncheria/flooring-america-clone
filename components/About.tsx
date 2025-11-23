import React from 'react';
import { Award, Heart, Shield, Users, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-900" />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We go above and beyond to ensure you love your new floors.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: 'Quality Products',
      description: 'We only carry the finest flooring materials from trusted manufacturers you can rely on.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Trusted Guarantee',
      description: 'Our Adore Your Floor Guarantee means if you don\'t love it, we\'ll replace it for free.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Expert Team',
      description: 'Our knowledgeable staff and certified installers are here to guide you every step of the way.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Store Locations', icon: <MapPin className="w-6 h-6" /> },
    { number: '25+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '50K+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Your Local Flooring Experts
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 25 years, Flooring America has been Wauconda's premier destination for quality flooring solutions. 
            We're locally owned and operated, dedicated to helping you find the perfect floor for the way you live.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                What started as a small local flooring store has grown into a trusted name in home improvement. 
                We've built our reputation one satisfied customer at a time, focusing on quality products, 
                expert installation, and exceptional customer service.
              </p>
              <p>
                As part of the Flooring America family with over 500 locations nationwide, we combine the 
                buying power of a national brand with the personalized service of a local business. Our team 
                understands that choosing new flooring is a significant investment, and we're here to make 
                the process as smooth and enjoyable as possible.
              </p>
              <p>
                Whether you're renovating a single room or your entire home, we have the expertise, selection, 
                and commitment to quality that you can trust. We're not just selling floors—we're helping you 
                create the home of your dreams.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-900 mb-4">25+</div>
                <div className="text-2xl text-gray-700 mb-2">Years of Excellence</div>
                <div className="text-gray-600">Serving Wauconda and surrounding communities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we serve our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">By The Numbers</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our commitment to excellence shows in our track record
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Flooring America?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Locally Owned & Operated</h4>
                  <p className="text-gray-600 text-sm">We're your neighbors, invested in your community and committed to your satisfaction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Installation</h4>
                  <p className="text-gray-600 text-sm">Our certified installers are trained professionals who take pride in their craftsmanship.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Incredible Selection</h4>
                  <p className="text-gray-600 text-sm">From hardwood to carpet, luxury vinyl to tile—we have options for every style and budget.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Flexible Financing</h4>
                  <p className="text-gray-600 text-sm">We offer financing options to make your dream floors affordable with payments that fit your budget.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Adore Your Floor Guarantee</h4>
                  <p className="text-gray-600 text-sm">If you don't love your new 5-Star floor, we'll replace it for free. That's our promise.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900 text-white rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Free Estimates</h4>
                  <p className="text-gray-600 text-sm">Get a free, no-obligation estimate for your project. We're here to help you plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

