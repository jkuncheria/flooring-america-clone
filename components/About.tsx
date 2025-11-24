import React from 'react';
import { Award, Heart, Shield, Users, Clock, Home, DollarSign, CheckCircle, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Beautiful Flooring Options',
      description: 'At Hometown Flooring Designs, we offer a diverse range of flooring options to suit every style and budget. From hardwood to carpet, we\'ve got you covered! We carry the following manufacturers: Engineered Floors/Dreamweaver carpets, Mohawk, Phenix, Southwind, Fusion, Lakeshore, and Somerset hardwood.'
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-900" />,
      title: 'Expert Installation Services',
      description: 'Our skilled team of installers will ensure that your new flooring is installed correctly and efficiently. You can trust us to get the job done right!'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Free In-Home Consultation',
      description: 'Not sure which flooring option is right for you? Schedule a free in-home consultation with one of our experts and we\'ll help you find the perfect fit.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />,
      title: 'Affordable Prices',
      description: 'At Hometown Flooring Designs, we believe that everyone deserves beautiful flooring without breaking the bank. That\'s why we offer competitive pricing on all of our products and services.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Customer Satisfaction Guaranteed',
      description: 'We pride ourselves on providing excellent customer service and ensuring that our customers are completely satisfied with their flooring. If you\'re not happy, we\'ll make it right!'
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Flooring Installers You Can Trust
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Family-Owned Emphasis */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="bg-blue-900 rounded-full p-6 shadow-xl">
                <Heart className="w-12 h-12 text-yellow-400" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">
                  Family-Owned & Operated
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-gray-700">
                  <span className="text-yellow-500">30 Years</span> of Excellence
                </p>
                <p className="text-lg text-gray-600 mt-3">
                  We are a family-owned and operated business providing quality installations of Carpet, Hardwood, Luxury Vinyl, Laminate, and Sheet Vinyl.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Home With <span className="text-blue-900">Hometown Flooring Designs</span>
          </h2>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Family Story Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-24 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Built on Family Values
            </h3>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
              For three decades, Hometown Flooring Designs has been a trusted name in flooring, built on the foundation of family values, integrity, and a commitment to excellence. As a family-owned and operated business, we understand that your home is more than just a house—it's where memories are made.
            </p>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Every installation is personal to us. We treat your home like our own, ensuring quality craftsmanship and attention to detail that only comes from a business that cares deeply about its reputation and its customers.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Hometown Flooring Designs?</h3>
            <div className="space-y-4">
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">30 Years of Family Tradition</h4>
                  <p className="text-gray-600">Three decades of experience means we've seen it all and know how to handle every flooring challenge with expertise and care.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Personalized Service</h4>
                  <p className="text-gray-600">As a family business, we take the time to understand your needs and provide personalized solutions that fit your lifestyle and budget.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Quality Products from Trusted Manufacturers</h4>
                  <p className="text-gray-600">We partner with leading manufacturers including Engineered Floors/Dreamweaver, Mohawk, Phenix, Southwind, Fusion, Lakeshore, and Somerset to bring you the best selection.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Installation Team</h4>
                  <p className="text-gray-600">Our skilled installers are trained professionals who take pride in their work and ensure every installation is done right the first time.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Your Satisfaction is Our Priority</h4>
                  <p className="text-gray-600">We stand behind our work. If you're not completely satisfied, we'll make it right—that's our family promise to you.</p>
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


