import React from 'react';
import { Search } from 'lucide-react';
import SectionOne from './Section';
import SectionMap from './SectionMap';
import SectionProps from './SectionProps';
import EcoFriendlyProperties from './SectionEco';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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

    const property = '/api/placeholder/831/467';

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className='bg-white w-full h-screen'>
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="bg-amber-400 text-black w-fit px-3 py-1 text-sm font-medium rounded">
                                THE MOST TRUSTED REAL ESTATE
                            </div>
                            <div className='h-52 w-full bg-white'>
                                <div className="flex flex-col items-start justify-center p-8">
                                    <h1 className="text-5xl font-bold mb-4 flex gap-2 transform transition-all duration-1000">
                                        <span className="text-blue-600 animate-[fade-in-back_4.5s_ease-out_infinite]">
                                            BUY,
                                        </span>
                                        <span className="text-red-500 animate-[fade-in-back_4.5s_ease-out_300ms_infinite]">
                                            RENT,
                                        </span>
                                        <span className="text-green-400 animate-[fade-in-back_4.5s_ease-out_600ms_infinite]">
                                            OR SELL
                                        </span>
                                    </h1>

                                    <h1 className="text-4xl font-bold mb-4 animate-[fade-in-back_4.5s_ease-out_900ms_infinite]">
                                        YOUR PROPERTY
                                    </h1>

                                    <h1 className="text-4xl font-bold animate-[fade-in-back_4.5s_ease-out_1200ms_infinite]">
                                        EASILY!
                                    </h1>

                                    <style jsx>{`
        @keyframes fade-in-back {
          0% {
            opacity: 0;
            transform: translateZ(-100px);
          }
          30% {
            opacity: 1;
            transform: translateZ(0);
          }
          80% {
            opacity: 1;
            transform: translateZ(0);
          }
          100% {
            opacity: 0;
            transform: translateZ(-100px);
          }
        }
      `}</style>
                                </div>
                            </div>
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
                        <div className="w-[500px]"> {/* Fixed width container for slider */}
                            <Slider {...sliderSettings} className="property-slider">
                                {propertyImages.map((img, index) => (
                                    <div key={index} className="px-2">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-28 object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                ))}
                            </Slider>
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
                            <img src={property} className='object-contain h-auto' alt="Property" />
                        </div>
                    </div>
                    <div className='w-full h-16 bg-gray-900'></div>
                </div>
                <SectionOne />
                <div className='p-10'>
                    <SectionMap />
                </div>
                <SectionProps />
                <EcoFriendlyProperties />
            </div>
        </>
    );
};

export default HomePage;