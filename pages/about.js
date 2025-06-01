// pages/about.js
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

/**
 * About Page Component
 *
 * This component provides information about the company or platform.
 *
 * @returns {JSX.Element} The About Us page component.
 */
export default function AboutPage() {
  const { t } = useTranslation(['common', 'about']); // Assuming 'about.json' for specific content

  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary-dark">
          {t('nav.aboutUs')}
        </h1>
        <section className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-text-primary">
          <p className="mb-4 text-lg">
            {/* Replace with actual About Us content from your 'about.json' */}
            {t('about.paragraph1' || 'Onzono SkyConnect is your premier platform for seamless travel planning. We offer a comprehensive suite of tools to help you find and book the best flights and explore exclusive airport lounges.')}
          </p>
          <p className="mb-4 text-lg">
            {t('about.paragraph2' || 'Our mission is to simplify your travel experience, providing reliable information and a user-friendly interface. We are committed to connecting you with the world, one journey at a time.')}
          </p>
          <p className="mb-4 text-lg">
            {t('about.paragraph3' || 'With a focus on innovation and customer satisfaction, Onzono SkyConnect aims to be your trusted partner for all your travel needs, from departure to arrival and beyond.')}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'])), // 'about' namespace is assumed
    },
  };
}
