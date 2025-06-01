// pages/lounges.js
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import LoungeCard from '../components/Cards/LoungeCard';
import Footer from '../components/Layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import WhatsAppReminder from '../components/UI/WhatsAppReminder';

export default function LoungesPage() {
  const { t } = useTranslation(['common', 'lounges', 'whatsapp']); // تحديد الـ namespaces

  const mockLounges = [
    {
      id: 'lounge-riyadh',
      name: t('lounges.skyLoungeRiyadh'),
      location: t('lounges.riyadhAirportLocation'),
      services: [t('lounges.wifiService'), t('lounges.snacksService'), t('lounges.drinksService')],
      hours: t('lounges.riyadhHours'),
      contact: '+966 11 1234567',
      description: t('lounges.riyadhDescription'),
      image: '/images/lounge-riyadh.jpg',
    },
    {
      id: 'lounge-dubai',
      name: t('lounges.skyLoungeDubai'),
      location: t('lounges.dubaiAirportLocation'),
      services: [t('lounges.showersService'), t('lounges.wifiService'), t('lounges.buffetService')],
      hours: t('lounges.dubaiHours'),
      contact: '+971 4 9876543',
      description: t('lounges.dubaiDescription'),
      image: '/images/lounge-dubai.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow p-4 container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8 text-primary-dark">
          {t('lounges.pageTitle')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockLounges.map((lounge) => (
            <LoungeCard key={lounge.id} {...lounge} />
          ))}
        </div>
        <WhatsAppReminder />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'lounges', 'whatsapp'])),
    },
  };
}
