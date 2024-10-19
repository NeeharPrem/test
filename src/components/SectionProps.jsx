import React from 'react';
import { Heart, Bed, Bath, Square } from 'lucide-react';

const Card = ({ property }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
            />
            <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full hover:bg-gray-100">
                <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium">
                {property.type}
            </span>
        </div>

        <div className="p-4">
            <h3 className="font-semibold text-lg">{property.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{property.location}</p>

            <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} ft²</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <span className="font-bold text-lg">₹{property.price}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="font-semibold">{property.rating}</span>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(property.rating)
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const SectionProps = () => {

    const img ='https://fancyhouse-design.com/wp-content/uploads/2024/05/A-dramatic-look-is-achieved-with-black-steel-steps-and-matching-railings.jpg'
    const properties = [
        {
            id: 1,
            type: 'VILLA',
            title: 'Palm Harbor',
            location: '2699 Green Valley, Highland Lake, FL',
            beds: 3,
            bathrooms: 2,
            sqft: 7,
            price: '22,095',
            rating: 4.6,
            image: img
        },
        {
            id: 2,
            type: 'VILLA',
            title: 'Palm Harbor',
            location: '2699 Green Valley, Highland Lake, FL',
            beds: 3,
            bathrooms: 2,
            sqft: 7,
            price: '22,095',
            rating: 4.6,
            image: img
        },
        {
            id: 3,
            type: 'VILLA',
            title: 'Palm Harbor',
            location: '2699 Green Valley, Highland Lake, FL',
            beds: 3,
            bathrooms: 2,
            sqft: 7,
            price: '22,095',
            rating: 4.6,
            image: img
        },
        {
            id: 4,
            type: 'VILLA',
            title: 'Palm Harbor',
            location: '2699 Green Valley, Highland Lake, FL',
            beds: 3,
            bathrooms: 2,
            sqft: 7,
            price: '22,095',
            rating: 4.6,
            image: img
        },
        {
            id: 5,
            type: 'VILLA',
            title: 'Palm Harbor',
            location: '2699 Green Valley, Highland Lake, FL',
            beds: 3,
            bathrooms: 2,
            sqft: 7,
            price: '22,095',
            rating: 4.6,
            image: img
        },
        {
            id: 6,
            type: 'VILLA',
            title: 'Palm Harbor',
            location: '2699 Green Valley, Highland Lake, FL',
            beds: 3,
            bathrooms: 2,
            sqft: 7,
            price: '22,095',
            rating: 4.6,
            image: img
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">FEATURED PROPERTIES</p>
                    <h2 className="text-2xl font-bold">
                        Our Featured <span className="text-orange-500">Properties</span>
                    </h2>
                </div>
                <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
                    Filters
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                    <Card key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default SectionProps;