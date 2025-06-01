// pages/flights/[flightId].js
import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import Image from 'next/image';

/**
 * Flight Details Page Component
 *
 * This dynamic page displays detailed information about a specific flight.
 * The flight ID is retrieved from the URL.
 * In a real application, this would fetch data from an API based on flightId.
 *
 * @returns {JSX.Element} The Flight Details page component.
 */
export default function FlightDetailsPage() {
  const router = useRouter();
  const { flightId } = router.query;
  const { t } = useTranslation(['common', 'flightDetails']); // Assuming 'flightDetails.json'

  // Mock data for a single flight.
  // In a real application, you would fetch this data using flightId.
  const mockFlightDetails = {
    'flight-001': {
      from: t('common.cities.riyadh'),
      to: t('common.cities.london'),
      airline: 'SkyConnect Airlines',
      flightNumber: 'SC123',
      departureTime: '10:00 AM',
      arrivalTime: '04:30 PM',
      duration: '6h 30m',
      price: '1500',
      description: 'Direct flight from Riyadh to London, offering a comfortable journey with in-flight entertainment and meal service.',
      image: '/images/london-city.jpg',
      amenities: ['Wi-Fi', 'In-flight Meals', 'Entertainment System', 'Comfort Seats'],
    },
    'flight-002': {
      from: t('common.cities.jeddah'),
      to: t('common.cities.dubai'),
      airline: 'Gulf Wings',
      flightNumber: 'GW456',
      departureTime: '08:00 AM',
      arrivalTime: '10:15 AM',
      duration: '2h 15m',
      price: '850',
      description: 'Quick and efficient flight from Jeddah to Dubai, perfect for business travelers.',
      image: '/images/dubai-skyline.jpg',
      amenities: ['Wi-Fi', 'Snacks', 'Priority Boarding'],
    },
    'flight-003': {
      from: t('common.cities.cairo'),
      to: t('common.cities.paris'),
      airline: 'Pharaoh Air',
      flightNumber: 'PA789',
      departureTime: '06:00 PM',
      arrivalTime: '11:00 PM',
      duration: '5h 00m',
      price: '2100',
      description: 'Evening flight from Cairo to Paris, providing a scenic journey to the City of Lights.',
      image: '/images/paris-eiffel.jpg',
      amenities: ['In-flight Meals', 'Entertainment System'],
    },
  };

  const flight = mockFlightDetails[flightId];

  if (!flight) {
    // You might want to show a loading state or a 404 page
    return (
      <>
        <Navbar />
        <main className="flex-grow container mx-auto p-4 text-center text-text-primary">
          <h1 className="text-3xl font-bold my-8">Flight not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {flight.image && (
            <div className="lg:w-1/2">
              <Image
                src={flight.image}
                alt={`${flight.airline} flight to ${flight.to}`}
                width={700}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
              />
            </div>
          )}
          <div className="p-6 lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-primary-dark mb-4">
              {flight.airline} - {flight.flightNumber}
            </h1>
            <p className="text-text-primary text-xl mb-2">
              {t('flightDetails.fromLabel', { from: flight.from })} {t('flightDetails.toLabel', { to: flight.to })}
            </p>
            <p className="text-text-secondary mb-2">
              <span className="font-semibold">{t('flightDetails.departure' || 'Departure')}:</span> {flight.departureTime}
            </p>
            <p className="text-text-secondary mb-2">
              <span className="font-semibold">{t('flightDetails.arrival' || 'Arrival')}:</span> {flight.arrivalTime}
            </p>
            <p className="text-text-secondary mb-2">
              <span className="font-semibold">{t('flightDetails.duration' || 'Duration')}:</span> {flight.duration}
            </p>
            <p className="text-2xl font-bold text-primary-color mb-4">
              {t('flightDetails.price' || 'Price')}: {flight.price} {t('common.currency')}
            </p>
            <p className="text-text-primary mb-6">{flight.description}</p>

            {flight.amenities && flight.amenities.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-primary-dark mb-3">
                  {t('flightDetails.amenities' || 'Amenities')}
                </h2>
                <ul className="list-disc list-inside text-text-secondary">
                  {flight.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            )}

            <button className="btn self-start">
              {t('flightDetails.bookNow' || 'Book Now')}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Implement getStaticPaths and getStaticProps for static generation
export async function getStaticPaths() {
  // In a real app, fetch this from your API
  const flightIds = ['flight-001', 'flight-002', 'flight-003'];
  const paths = flightIds.map((id) => ({
    params: { flightId: id },
    locale: 'en', // Generate for default locale
  }));

  // You might want to generate paths for other locales too
  const otherLocales = ['ar', 'es', 'pt', 'de'];
  otherLocales.forEach(locale => {
    flightIds.forEach(id => {
      paths.push({ params: { flightId: id }, locale: locale });
    });
  });

  return { paths, fallback: 'blocking' }; // 'blocking' shows loading state then fetches
}

export async function getStaticProps({ params, locale }) {
  // In a real app, fetch flight data using params.flightId
  // const flightData = await fetchFlightDetails(params.flightId);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'flightDetails'])), // Include relevant namespaces
      // flight: flightData, // Pass fetched flight data as prop
    },
    revalidate: 60, // Regenerate page every 60 seconds (ISR)
  };
}
