'use client';
// import React, {useState} from "react";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faXTwitter,
//   faInstagram,
//   faGoogle,
//   faPinterest,
//   faSkype,
//   faLinkedin,
//   faBandcamp,
//   faBootstrap,
// } from "@fortawesome/free-brands-svg-icons";

// import Logo from "../assets/logo.png";
// function Socials() {
//     const [activeDropdown, setActiveDropdown] = useState(null);

//      const menuItems = {
//     'About Us': ['Our Story & Vision', 'Our Core Values', 'Our Team', 'FAQs'],
//     'Programs': ['Campus Programs', 'Corporate Programs', 'Governance & Politics Programs', 'All Programs Overview'],
//     'Get Involved': ['Become a Member', 'Partner With Us', 'Volunteer', 'Mentor / Be Mentored'],
//     'Blog & Stories': ['All Articles', 'Stories of Impact', 'Thought Leadership', 'Multimedia'],
//     'Events': ['Upcoming Events', 'Past Events', 'Flagship Events'],
//     'Shop': ['All Products', 'Merchandise', 'Books & Resources', 'Support Packs']
//   };


//   const handleDropdownToggle = (item) => {
//     setActiveDropdown(activeDropdown === item ? null : item);
//   };

//     return(
//         <div>
//         <div className="socials-container text-center flex justify-around bg-[#02183b]" >
//             <div className="location flex gap-4">
//                 <p className="address" >
//                     Phone: +123 456 7890 
//                 </p>
//                 <p className="address">
//                     Address: 123 Main St, City, Country
//                 </p>

//             </div>
//             <div className="social-icons gap-4 flex">
//             <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
//             <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
//             <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
//             <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
//             <a href="#"><FontAwesomeIcon icon={faSkype} /></a>
//             <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
//             <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//             <a href="#"><FontAwesomeIcon icon={faBootstrap} /></a>
//         </div>
//       {/* 
//       <FontAwesomeIcon icon={faXTwitter} size="2x" />
//       <FontAwesomeIcon icon={faInstagram} size="2x" />
//       <FontAwesomeIcon icon={faGoogle} size="2x" />
//       <FontAwesomeIcon icon={faPinterest} size="2x" />
//       <FontAwesomeIcon icon={faSkype} size="2x" /> */}
    
//         </div>
//         <div className="navbar">
//             <div className="logo">
//                 <img src={Logo} alt="Logo" />
//             </div>
//                 <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo/Brand */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-xl font-bold text-blue-900 whitespace-nowrap">
//               🦅 The Eagle Generation
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           {/* <div className="hidden md:flex items-center space-x-1"> */}
//             <div className="hidden lg:flex items-center space-x-1 whitespace-nowrap">
            
//             {/* Regular Menu Items */}
//             <a href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
//               Home
//             </a>

//             {/* Dropdown Menu Items */}
//             {Object.entries(menuItems).map(([key, items]) => (
//               <div key={key} className="relative group">
//                 <button 
//                   className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center"
//                 >
//                   {key}
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border">
//                   {items.map((subItem) => (
//                     <a
//                       key={subItem}
//                       href={`/${key.toLowerCase().replace(' ', '-')}/${subItem.toLowerCase().replace(' ', '-')}`}
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
//                     >
//                       {subItem}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {/* Non-dropdown Items */}
//             <a href="/gallery" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
//               Gallery
//             </a>

//             {/* CTA Buttons */}
//             <div className="flex items-center space-x-2 ml-4">
//               <a
//                 href="/donate"
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
//               >
//                 Donate
//               </a>
//               <a
//                 href="/contact"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
//               className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {activeDropdown === 'mobile' && (
//           <div className="md:hidden border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
              
//               <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">
//                 Home
//               </a>

//               {Object.entries(menuItems).map(([key, items]) => (
//                 <div key={key}>
//                   <button
//                     onClick={() => handleDropdownToggle(key)}
//                     className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
//                   >
//                     {key}
//                     <svg className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} 
//                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
                  
//                   {activeDropdown === key && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {items.map((subItem) => (
//                         <a
//                           key={subItem}
//                           href={`/${key.toLowerCase().replace(' ', '-')}/${subItem.toLowerCase().replace(' ', '-')}`}
//                           className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg"
//                         >
//                           {subItem}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               <a href="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">
//                 Gallery
//               </a>

//               <div className="pt-2 space-y-2">
//                 <a
//                   href="/donate"
//                   className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
//                 >
//                   Donate
//                 </a>
//                 <a
//                   href="/contact"
//                   className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//         </div>
//     </div>
//     )
// }


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
    'About Us': ['Our Story & Vision', 'Our Core Values', 'Our Team', 'FAQs'],
    'Programs': ['Campus Programs', 'Corporate Programs', 'Governance & Politics Programs', 'All Programs Overview'],
    'Get Involved': ['Become a Member', 'Partner With Us', 'Volunteer', 'Mentor / Be Mentored'],
    'Blog & Stories': ['All Articles', 'Stories of Impact', 'Thought Leadership', 'Multimedia'],
    'Events': ['Upcoming Events', 'Past Events', 'Flagship Events'],
    'Shop': ['All Products', 'Merchandise', 'Books & Resources', 'Support Packs']
  };

  const handleDropdownToggle = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
            <div>
        <div className="socials-container text-center flex justify-around bg-[#02183b]" >
            <div className="location flex gap-4">
                <p className="address" >
                    Phone: +123 456 7890 
                </p>
                <p className="address">
                    Address: 123 Main St, City, Country
                </p>

            </div>
            <div className="social-icons gap-4 flex">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
            <a href="#"><FontAwesomeIcon icon={faSkype} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faBootstrap} /></a>
        </div>
        </div>
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand - Made smaller to save space */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-900 whitespace-nowrap">
              🦅 The Eagle Generation
            </a>
          </div>

          {/* Desktop Menu - Fixed to prevent wrapping */}
          <div className="hidden lg:flex items-center space-x-1 whitespace-nowrap">
            
            {/* Regular Menu Items */}
            <a href="/" className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">
              Home
            </a>

            {/* Dropdown Menu Items - Reduced padding and font size */}
            {Object.entries(menuItems).map(([key, items]) => (
              <div key={key} className="relative group">
                <button 
                  className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center"
                >
                  {key}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border z-50">
                  {items.map((subItem) => (
                    <a
                      key={subItem}
                      href={`/${key.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg text-sm"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Non-dropdown Items */}
            <a href="/gallery" className="px-2 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">
              Gallery
            </a>

            {/* CTA Buttons - Made more compact */}
            <div className="flex items-center space-x-2 ml-2">
              <a
                href="/donate"
                className="bg-green-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
              >
                Donate
              </a>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Show on medium screens instead of small */}
          <div className="lg:hidden">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
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
              
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">
                Home
              </a>

              {Object.entries(menuItems).map(([key, items]) => (
                <div key={key}>
                  <button
                    onClick={() => handleDropdownToggle(key)}
                    className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
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
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a href="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium">
                Gallery
              </a>

              <div className="pt-2 space-y-2">
                <a
                  href="/donate"
                  className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
                >
                  Donate
                </a>
                <a
                  href="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
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