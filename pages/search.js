// pages/search.js
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ResultsCard from '../components/ResultsCard';
import Footer from '../components/Footer';

/**
 * SearchPage Component
 *
 * This component displays search results based on user queries.
 * It includes a SearchBar at the top to allow for new searches or modifications,
 * and then lists the relevant flight/hotel results using ResultsCard components.
 *
 * @returns {JSX.Element} The Search Page component.
 */
export default function SearchPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { from, to, date } = router.query;

  // بيانات وهمية محسّنة لنتائج البحث
  // في تطبيق حقيقي، ستتم هذه البيانات بناءً على استدعاء API باستخدام 'from', 'to', 'date'
  const mockSearchResults = [
    {
      id: 'flight-004',
      type: 'flight',
      from: from || 'Riyadh',
      to: to || 'Paris',
      price: '1200',
      duration: '5h 45m',
      image: '/images/paris-eiffel.jpg',
      detailsLink: '/flights/flight-004',
    },
    {
      id: 'flight-005',
      type: 'flight',
      from: from || 'Madrid',
      to: to || 'Rome',
      price: '650',
      duration: '2h 10m',
      image: '/images/rome-colosseum.jpg',
      detailsLink: '/flights/flight-005',
    },
    {
      id: 'flight-006',
      type: 'flight',
      from: from || 'Berlin',
      to: to || 'Istanbul',
      price: '900',
      duration: '3h 30m',
      image: '/images/istanbul-mosque.jpg',
      detailsLink: '/flights/flight-006',
    },
  ];

  // يمكنك تصفية mockSearchResults بناءً على 'from', 'to', 'date' هنا
  const filteredResults = mockSearchResults.filter(flight => {
    const matchesFrom = !from || flight.from.toLowerCase().includes(from.toLowerCase());
    const matchesTo = !to || flight.to.toLowerCase().includes(to.toLowerCase());
    return matchesFrom && matchesTo;
  });

  return (
    // الحفاظ على flex-col min-h-screen من _app.js لضمان أن الفوتر يلتصق بالأسفل
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4">
        <SearchBar />

        <section className="container text-text-primary my-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            {t('searchPage.resultsTitle')}
          </h2>

          {/* هذا هو الجزء الذي كان به خطأ محتمل */}
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((result) => (
                <ResultsCard key={result.id} {...result} />
              ))}
            </div>
          ) : (
            <p className="text-center text-white text-lg">
              {t('searchPage.noResults')}
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

/**
 * Ensures that translations are loaded for the server-side rendering (SSR)
 * and static site generation (SSG) of this page.
 * @param {object} context - Next.js context object.
 * @param {object} context.locale - The current locale.
 * @returns {object} Props containing translation data.
 */
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'searchPage'])),
    },
  };
}
