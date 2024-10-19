import React from 'react';
import { Search } from 'lucide-react';
import SectionOne from './sectionOne';

const HomePage = () => {
    const stats = [
        { value: "1200+", label: "Premium Products" },
        { value: "4500+", label: "Happy Customer" },
        { value: "240+", label: "Award Winning" }
    ];

    const propertyImages = [
        { src: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Modern house at night" },
        { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Luxury villa with pool" },
        { src: "https://images.unsplash.com/photo-1716807335226-dfe1e2062db1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Pink mediterranean style house" }
    ];
    const property = 'https://www.jvmlending.com/wp-content/uploads/2024/05/Too-Much-Caution-Over-Credit-Inquiries-Soft-Pulls-to-the-Rescue-ARM-Data-Too-831x467.webp';

    return (
        <>
            <div className='bg-white w-full h-screen'>
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="bg-amber-400 text-black w-fit px-3 py-1 text-sm font-medium rounded">
                                THE MOST TRUSTED REAL ESTATE
                            </div>
                            <div className='h-52 w-96 bg-gray-100'></div>
                            <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet porta turpis, non bibendum ex.
                                condimentum quis. Pellentesque auctor libero ac interdum finibus.
                            </p>
                        </div>
                    </div>
                    <div id='prop' className='flex flex-row justify-between w-full mb-8'>
                        <div className='flex flex-col space-y-12'>
                            <div className="flex gap-4">
                                <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
                                    Schedule Visit
                                </button>
                                <button className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition flex items-center gap-2">
                                    Watch Video
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                </button>
                            </div>

                            <div className="flex gap-12">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {propertyImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-40 h-28 object-cover rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-500 p-8 rounded-lg">
                        <div className="flex gap-4 mb-4">
                            <button className="bg-white px-4 py-2 rounded-md font-medium">Rent</button>
                            <button className="text-white px-4 py-2 rounded-md">Buy</button>
                            <button className="text-white px-4 py-2 rounded-md">Sell</button>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white p-3 rounded-md">
                                <div className="text-sm text-gray-500">Select Home</div>
                                <div className="font-medium">Home Type</div>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <div className="text-sm text-gray-500">Select Apartment</div>
                                <div className="font-medium">Select Apartment</div>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <div className="text-sm text-gray-500">Select Rooms</div>
                                <div className="font-medium">Select Rooms</div>
                            </div>
                            <button className="bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                                <Search size={20} />
                                Search Property
                            </button>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col items-center w-full'>
                    <div className='flex justify-center items-center p-9'>
                        <div className='border-4 border-gray-900 p-2'>
                            <img src={property} className='object-contain h-auto' alt="Property Image" />
                        </div>
                    </div>
                    <div className='w-full h-16 bg-gray-900'></div>
                </div>
                <SectionOne />
            </div>
        </>
    );
};

export default HomePage;