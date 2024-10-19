import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Type</li>
                        <li>Services</li>
                        <li>Our Team</li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Search className="text-gray-400" />
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Login / Sign up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;