import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[700px] md:h-[800px] bg-gray-900 overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
          WAUCONDA'S PREMIER<br />FLOORING STORE
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Discover the perfect foundation for your home with our exclusive selection of top-quality flooring.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105">
            SHOP NOW
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105">
            VIEW FINANCING
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;