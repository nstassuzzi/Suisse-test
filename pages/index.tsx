import React from 'react';
import Hero from '../components/hero';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import properties from '../data/properties.json';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            title={property.title}
            image={property.image}
            price={property.price}
            location={property.location}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;