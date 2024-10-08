import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center ">
      <div className="text-xl font-semibold font-inter text-gray-700">
        {t('Dashboard')}
      </div>
      <div className="flex items-center space-x-4 relative">
        {/* Language Toggle */}
        <button onClick={toggleLanguage} className="flex items-center space-x-2 text-gray-400">
          <MdOutlineLanguage size={20} />
          <span>{i18n.language === 'en' ? 'FR' : 'EN'}</span>
        </button>

        {/* Profile Picture with Dropdown */}
        <div className="relative">
          <FaUserCircle 
            size={30} 
            className="text-gray-700 cursor-pointer" 
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md py-2 border">
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('View Profile')}
              </Link>
              <Link 
                to="/settings" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Settings')}
              </Link>
              <div 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setIsDropdownOpen(false);
                  // Add logout functionality if needed
                }}
              >
                {t('Logout')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
