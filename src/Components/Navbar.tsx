import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSelect = (path = '') => {
        setIsOpen(false);
        navigate(`/${path.toLowerCase()}`);
    }

    const handleSearch = (e: any) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // You can customize this search logic based on your needs
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsSearchOpen(false);
        }
    }

    const handleSearchIconClick = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            // Focus on search input when opened
            setTimeout(() => {
                document.getElementById('desktop-search')?.focus();
            }, 100);
        }
    }

    return (
        <>
            <nav className="flex fixed border-b-2 border-b-red-500 left-0 right-0 top-0 z-50 justify-between items-center bg-gray-100 h-16 px-4">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200" onClick={() => handleSelect('')}>
                    <img src="https://img.icons8.com/color/48/dynamics-365.png" alt="logo" className="w-8 h-8" />
                    <span className="font-bold text-xl md:text-2xl">Zarrin</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <span className="cursor-pointer text-xl hover:text-blue-500 transition-colors duration-200" onClick={() => handleSelect('')}>Blog</span>
                    <span className="cursor-pointer text-xl hover:text-blue-500 transition-colors duration-200" onClick={() => handleSelect('about')}>About</span>
                    
                    {/* Desktop Search */}
                    <div className="relative">
                        {/* Search Icon */}
                        <img 
                            src="https://img.icons8.com/glyph-neue/50/search.png" 
                            alt="search" 
                            className="w-8 h-8 cursor-pointer hover:scale-90 transition-transform duration-200" 
                            onClick={handleSearchIconClick}
                        />
                        
                        {/* Search Input - Slide Down Animation */}
                        <div className={`absolute top-12 right-0 w-80 bg-white rounded-lg shadow-lg border transition-all duration-300 ease-out ${isSearchOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                            <form onSubmit={handleSearch} className="p-4">
                                <div className="flex items-center bg-gray-50 rounded-lg p-3">
                                    <img src="https://img.icons8.com/glyph-neue/50/search.png" alt="search" className="w-5 h-5 mr-3 opacity-60" />
                                    <input 
                                        id="desktop-search"
                                        type="text" 
                                        placeholder="Search blogs, articles..." 
                                        className="bg-transparent flex-1 outline-none text-gray-700"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onBlur={() => {
                                            // Close search after a short delay to allow for clicks
                                            setTimeout(() => setIsSearchOpen(false), 200);
                                        }}
                                    />
                                    {searchQuery && (
                                        <button 
                                            type="submit"
                                            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            Search
                                        </button>
                                    )}
                                </div>
                                
                                {/* Quick search suggestions (optional) */}
                                <div className="mt-3 text-sm text-gray-500">
                                    <p className="mb-1">Quick searches:</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200" onClick={() => setSearchQuery('React')}>React</span>
                                        <span className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200" onClick={() => setSearchQuery('JavaScript')}>JavaScript</span>
                                        <span className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200" onClick={() => setSearchQuery('Tutorial')}>Tutorial</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <span className="px-4 py-2 bg-green-300 hover:bg-green-400 transition-colors duration-200 cursor-pointer rounded-lg" onClick={() => handleSelect('contact-us')}>Contact Us</span>
                </div>

                {/* Mobile Hamburger Icon with Animation */}
                <div className="md:hidden cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
                    <div className="relative w-6 h-5">
                        <span className={`absolute block w-full h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                        <span className={`absolute block w-full h-0.5 bg-gray-800 top-2 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute block w-full h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu (Sidebar) with Enhanced Smooth Animation */}
            <div className={`fixed top-16 right-0 w-72 sm:w-80 h-screen bg-white shadow-2xl transform transition-all duration-500 ease-out z-40 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="p-6 flex flex-col space-y-6">
                    {/* Search bar for mobile */}
                    <form onSubmit={handleSearch}>
                        <div className="flex items-center bg-gray-100 rounded-lg p-3 mb-4">
                            <img src="https://img.icons8.com/glyph-neue/50/search.png" alt="search" className="w-5 h-5 mr-3 opacity-60" />
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="bg-transparent flex-1 outline-none text-gray-700"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button 
                                    type="submit"
                                    className="ml-2 text-blue-500 hover:text-blue-700"
                                >
                                    Go
                                </button>
                            )}
                        </div>
                    </form>
                    
                    {/* Navigation items with staggered animation */}
                    <div className={`transition-all duration-700 delay-100 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <span className="cursor-pointer hover:text-blue-500 hover:bg-blue-50 text-lg p-3 rounded-lg block transition-all duration-200 border-b border-gray-100" onClick={() => handleSelect('')}>
                            📝 Blog
                        </span>
                    </div>
                    
                    <div className={`transition-all duration-700 delay-200 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <span className="cursor-pointer hover:text-blue-500 hover:bg-blue-50 text-lg p-3 rounded-lg block transition-all duration-200 border-b border-gray-100" onClick={() => handleSelect('about')}>
                            ℹ️ About
                        </span>
                    </div>
                    
                    <div className={`transition-all duration-700 delay-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <span className="cursor-pointer bg-green-300 hover:bg-green-400 text-lg p-3 rounded-lg block transition-all duration-200 text-center font-medium" onClick={() => handleSelect('contact-us')}>
                            📞 Contact Us
                        </span>
                    </div>
                    
                    {/* Additional mobile-specific content */}
                    <div className={`transition-all duration-700 delay-400 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <div className="pt-6 mt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500 text-center">© 2025 Zarrin</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Overlay with smooth fade */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 z-30 md:hidden transition-opacity duration-500 ease-out backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
            
            {/* Desktop Search Overlay */}
            {isSearchOpen && (
                <div 
                    className="fixed inset-0 z-40 hidden md:block"
                    onClick={() => setIsSearchOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar;