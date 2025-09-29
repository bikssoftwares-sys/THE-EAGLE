'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faGoogle,
  faPinterest,
  faSkype,
  faLinkedin,
  faBandcamp,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    'About Us': ['Our Story', 'Vision & Mission', 'Core Values', 'Who We Are', 'FAQs'],
    'Programs': ['Campus Programs', 'Corporate Programs', 'Political & Governance Programs', 'Cross-Cutting Activities'],
    'Get Involved': ['Become a Member', 'Partner With Us', 'Volunteer', 'Mentor Be Mentored'],
    'Blog & Stories': ['Stories of Impact', 'Thought Leadership', 'Multimedia Features'],
    'Events': ['Flagship Annual Events', 'Ongoing Programs', 'Upcoming Events'],
    'Shop': ['Movement Merchandise', 'Kingdom Resources', 'Media Learning Products', 'Support Packs'],
    'Partners': ['Our Strategic Partners', 'Become a Partner']
  };

  const handleDropdownToggle = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <div>
      {/* Top Social Bar */}
      <div className="socials-container text-center flex justify-around bg-[#02183b] py-2">
        <div className="location flex gap-4">
          <p className="address">
            Phone: +254 796 808 883
          </p>
          <p className="address">
            Address: P.O. Box 22272, Nairobi, Kenya
          </p>
        </div>
        <div className="social-icons gap-4 flex">
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faSkype} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faBootstrap} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-blue-900 whitespace-nowrap hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                🦅 The Eagle Generation
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 whitespace-nowrap">
              
              {/* Regular Menu Items */}
              <a href="/" className="px-3 py-2 text-gray-700 font-medium text-sm relative group transition-all duration-300">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-red-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </a>

              {/* Dropdown Menu Items - Only navbar part has red effects */}
              {Object.entries(menuItems).map(([key, items]) => (
                <div key={key} className="relative group">
                  <button className="px-3 py-2 text-gray-700 font-medium text-sm flex items-center relative group transition-all duration-300">
                    <span className="relative z-10">{key}</span>
                    <svg className="w-3 h-3 ml-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className="absolute inset-0 bg-red-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  </button>
                  
                  {/* Dropdown content - NO red effects, keep original styling */}
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border z-50">
                    {items.map((subItem) => (
                      <a
                        key={subItem}
                        href={`/${key.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg text-sm transition-colors duration-300"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Non-dropdown Items */}
              <a href="/gallery" className="px-3 py-2 text-gray-700 font-medium text-sm relative group transition-all duration-300">
                <span className="relative z-10">Gallery</span>
                <div className="absolute inset-0 bg-red-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </a>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-2 ml-2">
                <a
                  href="/donate"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 text-sm"
                >
                  Donate
                </a>
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
                className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {activeDropdown === 'mobile' && (
            <div className="lg:hidden border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                
                <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors duration-300">
                  Home
                </a>

                {Object.entries(menuItems).map(([key, items]) => (
                  <div key={key}>
                    <button
                      onClick={() => handleDropdownToggle(key)}
                      className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors duration-300"
                    >
                      <span className="whitespace-nowrap">{key}</span>
                      <svg className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`}
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {activeDropdown === key && (
                      <div className="ml-4 mt-1 space-y-1">
                        {items.map((subItem) => (
                          <a
                            key={subItem}
                            href={`/${key.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <a href="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors duration-300">
                  Gallery
                </a>

                <div className="pt-2 space-y-2">
                  <a
                    href="/donate"
                    className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    Donate
                  </a>
                  <a
                    href="/contact"
                    className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
