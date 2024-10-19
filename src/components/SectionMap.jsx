import React from 'react';
import { MapPin, Filter } from 'lucide-react';

const SectionMap = () => {
    const map = 'https://images.squarespace-cdn.com/content/51d98be2e4b05a25fc200cbc/1377624884321-3QWG85XC4IVH34E89UDT/Untitled.png?content-type=image%2Fpng'

    return (
        <div id='search' className="relative">
            <div id='map' className="relative">
                <img
                    src={map}
                    alt="Map"
                    className="w-full h-full rounded-lg"
                />
                <div className="absolute top-4 left-4 right-4 flex ">
                    <div className='flex flex-col gap-3'>
                        <div className="mb-8">
                            <h1 className="text-white text-2xl font-semibold mb-2">
                                National Property <span className="font-bold">Network</span>
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className="flex items-center bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 w-64">
                            <MapPin className="text-gray-400 w-5 h-5 mr-2" />
                            <input
                                type="text"
                                placeholder="Chandigarh, Mohali"
                                className="bg-transparent text-gray-300 outline-none w-full"
                            />
                        </div>
                        <button className="flex items-center bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300">
                            <Filter className="w-5 h-5 mr-2" />
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionMap;