import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-light-body dark:bg-dark-body text-light-text dark:text-slate-50 py-8">
      <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h1 className="font-montserrat-alt text-lg font-semibold mb-2 text-[#] dark:text-slate-50 text-light-text">
            Vocational <span className="text-[#D1EC79] dark:text-gray-300">Hub</span>
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('Empowering people with vocational skills for a brighter future.')}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <Link to="/" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('home')}</Link>
          <Link to="/services" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('services')}</Link>
          <Link to="/portfolio" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('portfolio')}</Link>
          <Link to="/contact" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('contact')}</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/kongnyuy.simeon.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-[#D1EC79] dark:hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/simeonazeh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-[#D1EC79] dark:hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Simeon-Azeh" target="_blank" rel="noopener noreferrer" className="hover:text-[#D1EC79] dark:hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Vocational Hub. {t('All rights reserved.')}</p>
      </div>
    </footer>
  );
}

export default Footer;
