// pages/lounges.js
import React from 'react';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';
import LoungeCard from '../components/LoungeCard';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function LoungesPage() {
  // جلب الـ namespaces التي تحتاجها هذه الصفحة
  const { t } = useTranslation(['common', 'lounges', 'footer']);

  const mockLounges = [
    {
      id: 'lounge-001',
      name: t('lounges.skyLoungeRiyadh'),
      location: t('lounges.riyadhAirportLocation'),
      services: [t('lounges.wifiService'), t('lounges.snacksService'), t('lounges.drinksService')],
      image: '/images/lounge-riyadh.jpg', // تأكد من وجود هذه الصورة
      hours: t('lounges.riyadhHours'),
      description: t('lounges.riyadhDescription'),
    },
    {
      id: 'lounge-002',
      name: t('lounges.skyLoungeDubai'),
      location: t('lounges.dubaiAirportLocation'),
      services: [t('lounges.showersService'), t('lounges.wifiService'), t('lounges.buffetService')],
      image: '/images/lounge-dubai.jpg', // تأكد من وجود هذه الصورة
      hours: t('lounges.dubaiHours'),
      description: t('lounges.dubaiDescription'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8 text-primary-dark">{t('nav.lounges')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLounges.map((lounge) => (
            <LoungeCard key={lounge.id} {...lounge} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      // هنا تحدد جميع الـ namespaces التي تحتاجها هذه الصفحة
      ...(await serverSideTranslations(locale, ['common', 'lounges', 'footer'])),
    },
  };
}
