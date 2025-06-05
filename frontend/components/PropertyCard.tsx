import React from 'react';

interface PropertyCardProps {
  title: string;
  image: string;
  price: string;
  location: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, image, price, location }) => (
  <div className="border rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-lg font-bold mt-2">{price}</p>
      <button className="mt-4 text-blue-600 hover:underline">Ver más</button>
    </div>
  </div>
);

export default PropertyCard;