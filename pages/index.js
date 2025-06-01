// pages/index.js
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Layout/Navbar'; // تحديث المسار
import SearchBar from '../components/Forms/SearchBar'; // تحديث المسار
import ResultsCard from '../components/Cards/ResultsCard'; // تحديث المسار
import Footer from '../components/Layout/Footer'; // تحديث المسار
import WhatsAppReminder from '../components/UI/WhatsAppReminder'; // تحديث المسار

/**
 * Home Page Component
 *
 * This component represents the main landing page of the application.
 * It integrates the Navbar, SearchBar, displays a list of popular flights,
 * and includes the Footer. The background image and overlay are handled
 * by the global CSS in _app.js.
 *
 * @returns {JSX.Element} The Home page component.
 */
export default function Home() {
  // تحديد الـ namespaces التي تحتاجها هذه الصفحة ومكوناتها الفرعية
  const { t } = useTranslation(['common', 'home', 'search', 'results']);

  // بيانات وهمية محسّنة لتتوافق مع الـ props الجديدة لـ ResultsCard
  const mockFlights = [
    {
      id: 'flight-001',
      type: 'flight',
      from: t('common.cities.riyadh'),
      to: t('common.cities.london'),
      price: '1500',
      duration: '6h 30m',
      image: '/images/london-city.jpg',
      detailsLink: '/flights/flight-001',
    },
    {
      id: 'flight-002',
      type: 'flight',
      from: t('common.cities.jeddah'),
      to: t('common.cities.dubai'),
      price: '850',
      duration: '2h 15m',
      image: '/images/dubai-skyline.jpg',
      detailsLink: '/flights/flight-002',
    },
    {
      id: 'flight-003',
      type: 'flight',
      from: t('common.cities.cairo'),
      to: t('common.cities.paris'),
      price: '2100',
      duration: '5h 00m',
      image: '/images/paris-eiffel.jpg',
      detailsLink: '/flights/flight-003',
    },
  ];

  return (
    // الحفاظ على flex-col min-h-screen من _app.js لضمان أن الفوتر يلتصق بالأسفل
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <SearchBar />

        <section className="container text-text-primary my-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            {t('home.popularFlights')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockFlights.map((flight) => (
              <ResultsCard key={flight.id} {...flight} />
            ))}
          </div>
        </section>
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
      ...(await serverSideTranslations(locale, ['common', 'home', 'search', 'results', 'whatsapp'])),
      // will be passed to the page component as props
    },
  };
}
