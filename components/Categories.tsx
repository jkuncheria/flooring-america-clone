import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section id="our-products" className="py-16 bg-gray-50 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">OUR PRODUCTS</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {CATEGORIES.map((cat) => {
          const content = (
            <>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md mb-4 border-4 border-white group-hover:border-yellow-500 transition-colors duration-300">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-900">{cat.name}</h3>
            </>
          );

          const linkMap: Record<string, string> = {
            'hardwood': '/hardwood',
            'carpet': '/carpet',
            'tile': '/tile',
            'luxury-vinyl': '/luxury-vinyl',
            'laminate': '/laminate'
          };

          if (linkMap[cat.id]) {
            return (
              <Link 
                key={cat.id} 
                to={linkMap[cat.id]} 
                className="group cursor-pointer flex flex-col items-center"
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={cat.id} className="group cursor-pointer flex flex-col items-center">
              {content}
          </div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
          <Link 
            to="/hardwood"
            className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-2 px-6 rounded transition-colors"
          >
              VIEW ALL FLOORS
          </Link>
      </div>
    </section>
  );
};

export default Categories;