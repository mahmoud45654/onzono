// pages/search.js
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Layout/Navbar';
import SearchBar from '../components/Forms/SearchBar';
import Footer from '../components/Layout/Footer';
import WhatsAppReminder from '../components/UI/WhatsAppReminder';

/**
 * Search Page Component
 *
 * This component acts as a dedicated search page, primarily hosting the SearchBar.
 * It's useful if you want a separate page just for initiating searches,
 * or if you plan to add advanced search filters.
 *
 * @returns {JSX.Element} The Search page component.
 */
export default function SearchPage() {
  const { t } = useTranslation(['common', 'search', 'whatsapp']);

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/*
          SearchBar component is used here. It handles its own internal state
          and can redirect to a results page.
        */}
        <SearchBar />
        <WhatsAppReminder />
      </main>
      <Footer />
    </>
  );
}

/**
 * Ensures that translations are loaded for the server-side rendering
 * by fetching the necessary namespaces.
 *
 * @param {object} context - The Next.js context object.
 * @param {string} context.locale - The current locale.
 * @returns {object} Props containing translations.
 */
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'search', 'whatsapp'])),
    },
  };
}
