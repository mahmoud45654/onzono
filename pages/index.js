// pages/index.js
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ResultsCard from '../components/ResultsCard';
import Footer from '../components/Footer';
import WhatsAppReminder from '../components/WhatsAppReminder';

export default function Home() {
  // جلب الـ namespaces التي تحتاجها هذه الصفحة
  const { t } = useTranslation(['common', 'home', 'search', 'whatsapp', 'footer']);

  // بيانات وهمية مع مفاتيح ترجمة للمدن
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
      price: '1200',
      duration: '3h 00m',
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
    <div className="flex flex-col min-h-screen">
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
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      // هنا تحدد جميع الـ namespaces التي تحتاجها هذه الصفحة
      ...(await serverSideTranslations(locale, ['common', 'home', 'search', 'whatsapp', 'footer'])),
    },
  };
}
