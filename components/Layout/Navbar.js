// components/Layout/Navbar.js
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

/**
 * Navbar Component
 *
 * This component renders the main navigation bar for the application.
 * It uses next/link for client-side routing and next-i18next for internationalization.
 *
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = () => {
  const { t } = useTranslation('common'); // تحديد namespace 'common'
  const router = useRouter(); // تهيئة useRouter

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <nav className="bg-primary-dark p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Home Link */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Onzono SkyConnect Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          {/* يمكنك إضافة اسم الموقع بجانب الشعار إذا أردت */}
          {/* <span className="text-white text-2xl font-bold">Onzono SkyConnect</span> */}
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="nav-link">
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link href="/search" className="nav-link">
              {t('nav.search')}
            </Link>
          </li>
          <li>
            <Link href="/lounges" className="nav-link">
              {t('nav.lounges')}
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              {t('nav.aboutUs')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        {/* Language Switcher and Sign In */}
        <div className="flex items-center space-x-4">
          <select
            onChange={handleLanguageChange}
            value={router.locale}
            className="bg-primary-dark text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-color"
          >
            {router.locales.map((locale) => (
              <option key={locale} value={locale}>
                {locale.toUpperCase()}
              </option>
            ))}
          </select>
          <Link href="/signin" className="btn-secondary">
            {t('nav.signIn')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
