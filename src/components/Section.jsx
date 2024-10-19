import React from 'react';
import { Home, Building, Mountain, TrendingUp, Clock, Users, ChevronRight, ChevronLeft } from 'lucide-react';

const SectionOne = () => {
  const propertyTypes = [
    { icon: <Home />, title: 'Apartment', properties: '167 Properties' },
    { icon: <Building />, title: 'Apartments', properties: '203 Properties' },
    { icon: <Home className="text-white" />, title: 'Villa Properties', properties: '167 Properties', active: true },
    { icon: <Mountain />, title: 'Bungalow', properties: '167 Properties' },
    { icon: <TrendingUp />, title: 'Investment', properties: '167 Properties' },
    { icon: <Home />, title: 'TownHouse', properties: '167 Properties' },
  ];

  const features1 = [
    { icon: <Users className="text-white" />, title: 'Trusted Agency', description: 'Were trusted by more than 1M+ users' },
    { icon: <Clock className="text-white" />, title: '24-Hour Control', description: 'Quick response and on time service' }
  ];
  const features2=[
    { icon: <Users className="text-white" />, title: "It's Everywhere", description: 'Find properties you want to live' },
    { icon: <Clock className="text-white" />, title: 'Easy Payment', description: 'Multiple payment options available' },
  ]
  const imgprop ='https://fancyhouse-design.com/wp-content/uploads/2024/05/A-dramatic-look-is-achieved-with-black-steel-steps-and-matching-railings.jpg'
  return (
    <>
    <div className="w-full mt-5 p-20 mx-auto space-y-12">
      <div className="space-y-4">
        <h2 className='text-gray-400'>- PROPERTY TYPES</h2>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Explore Properties Type</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-lg border-2">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="p-2 bg-white rounded-lg border-2">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl text-center space-y-2 border-black border-dotted ${
                type.active ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-50'
              }`}
            >
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                type.active ? 'bg-blue-600' : 'bg-white'}`}>
                {type.icon}
              </div>
              <div className="text-sm font-medium">{type.title}</div>
              <div className="text-xs opacity-70">{type.properties}</div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-center text-lg text-black">
        Trusted by <span className='text-red-500'>1000+ of business owners</span> in the industry for buying and selling properties
      </h1>
      <div className='flex flex-row justify-between w-full p-10'>
        <div className="flex flex-col gap-4 flex-grow">
          {features1.map((feature, index) => (
            <div key={index} className={`p-6 rounded-xl border-2 border-dashed ${index === 0 ? 'bg-red-500 text-white' :
              index === 2 ? 'bg-blue-500 text-white' : 'bg-green-100'
              } min-h-[200px] flex-grow`}>
              <div className="w-10 h-10 rounded-full bg-opacity-20 bg-black flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex-grow flex items-center justify-center">
          <img src={imgprop} className='object-contain h-[450px] rounded-lg' alt="Property Image" />
        </div>

        <div className="flex flex-col gap-4 flex-grow">
          {features2.map((feature, index) => (
            <div key={index} className={`p-6 rounded-xl border-2 border-dashed ${index === 0 ? 'bg-red-500 text-white' :
              index === 2 ? 'bg-blue-500 text-white' : 'bg-green-100'
              } min-h-[200px] flex-grow`}>
              <div className="w-10 h-10 rounded-full bg-opacity-20 bg-black flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="space-y-4 bg-gray-100 px-56 pb-9 pt-3">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Explore our diverse portfolio of</h2>
            <h2 className="text-2xl font-semibold text-red-500"><span className='text-2xl font-semibold text-black'>exceptional</span> properties</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-lg border-2">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="p-2 bg-white rounded-lg border-2">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
        <div className='w-full h-50 flex justify-evenly'>
          <div className="grid grid-cols-3 gap-10">
            <div className="rounded-xl overflow-hidden h-80 w-72 bg-gray-200">
              <img src={imgprop} alt="pic" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden h-80 w-80 bg-gray-200">
              <img src={imgprop} alt="pic" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden h-80 w-72 bg-gray-200">
              <img src={imgprop} alt="pic" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;