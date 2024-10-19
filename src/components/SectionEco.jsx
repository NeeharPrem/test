import React from 'react';

const EcoFriendlyProperties = () => {
    const img = 'https://fancyhouse-design.com/wp-content/uploads/2024/05/A-dramatic-look-is-achieved-with-black-steel-steps-and-matching-railings.jpg'
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                    — COMMERCIAL PROPERTIES
                </p>
                <h2 className="text-3xl font-semibold">
                    Eco-Friendly <span className="font-bold">Business</span>{' '}
                    <span className="text-red-500">Properties</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 row-span-2">
                    <div className="relative h-full">
                        <img
                            src={img}
                            alt="Modern interior design"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                    </div>
                </div>


                <div className="md:col-span-2">
                    <div className="relative h-64">
                        <img
                            src={img}
                            alt="Spacious living area"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                    </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                    <div className="relative h-48">
                        <img
                            src={img}
                            alt="Kitchen design"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                    </div>
                    <div className="relative h-48">
                        <img
                            src={img}
                            alt="Office space"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendlyProperties;