// components/Layout/Footer.js
import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

/**
 * Footer Component
 *
 * This component renders the application's footer, displaying copyright information
 * and essential navigation links (e.g., Privacy Policy, Terms of Service).
 *
 * @returns {JSX.Element} The Footer component.
 */
const Footer = () => {
  const { t } = useTranslation('common'); // تحديد namespace 'common' للمفاتيح العامة في الفوتر
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-800 text-white p-8">
      <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright and Site Name */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold mb-2 block hover:text-primary-color transition-colors duration-300">
            Onzono SkyConnect
          </Link>
          <p className="text-gray-400">
            &copy; {currentYear} Onzono SkyConnect. {t('footer.rights')}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300">
            {t('footer.privacyPolicy')}
          </Link>
          <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-300">
            {t('footer.termsOfService')}
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-300">
            {t('footer.faq')}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
            {t('nav.contact')} {/* يمكن استخدام مفتاح من nav إذا كان هذا هو المكان الوحيد له */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
