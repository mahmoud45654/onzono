// pages/hotels/[hotelId].js
import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import Image from 'next/image';

/**
 * Hotel Details Page Component
 *
 * This dynamic page displays detailed information about a specific hotel.
 * The hotel ID is retrieved from the URL.
 * In a real application, this would fetch data from an API based on hotelId.
 *
 * @returns {JSX.Element} The Hotel Details page component.
 */
export default function HotelDetailsPage() {
  const router = useRouter();
  const { hotelId } = router.query;
  const { t } = useTranslation(['common', 'hotelDetails']); // Assuming 'hotelDetails.json'

  // Mock data for a single hotel.
  // In a real application, you would fetch this data using hotelId.
  const mockHotelDetails = {
    'hotel-abc': {
      name: 'Luxury Grand Hotel',
      location: t('common.cities.dubai'),
      stars: 5,
      pricePerNight: '750',
      description: 'Experience unparalleled luxury at the Grand Hotel, situated in the heart of Dubai with stunning city views. Enjoy world-class dining, a rejuvenating spa, and opulent rooms.',
      image: '/images/dubai-hotel.jpg', // Placeholder image
      amenities: ['Free Wi-Fi', 'Swimming Pool', 'Spa & Wellness Center', 'Fitness Center', 'Restaurant', 'Concierge Service'],
      checkInTime: '03:00 PM',
      checkOutTime: '12:00 PM',
    },
    'hotel-xyz': {
      name: 'City View Inn',
      location: t('common.cities.london'),
      stars: 3,
      pricePerNight: '300',
      description: 'A comfortable and affordable stay in central London, offering easy access to major attractions and public transport. Perfect for tourists and budget travelers.',
      image: '/images/london-hotel.jpg', // Placeholder image
      amenities: ['Free Wi-Fi', 'Breakfast Included', '24-hour Front Desk'],
      checkInTime: '02:00 PM',
      checkOutTime: '11:00 AM',
    },
  };

  const hotel = mockHotelDetails[hotelId];

  if (!hotel) {
    // You might want to show a loading state or a 404 page
    return (
      <>
        <Navbar />
        <main className="flex-grow container mx-auto p-4 text-center text-text-primary">
          <h1 className="text-3xl font-bold my-8">Hotel not found.</h1>
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
          {hotel.image && (
            <div className="lg:w-1/2">
              <Image
                src={hotel.image}
                alt={`${hotel.name} in ${hotel.location}`}
                width={700}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
              />
            </div>
          )}
          <div className="p-6 lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-primary-dark mb-4">{hotel.name}</h1>
            <p className="text-text-primary text-xl mb-2">
              {t('hotelDetails.locationLabel', { location: hotel.location })}
            </p>
            <p className="text-text-secondary mb-2">
              <span className="font-semibold">{t('hotelDetails.starsLabel' || 'Stars')}:</span> {hotel.stars}
            </p>
            <p className="text-2xl font-bold text-primary-color mb-4">
              {t('hotelDetails.pricePerNight' || 'Price per night')}: {hotel.pricePerNight} {t('common.currency')}
            </p>
            <p className="text-text-primary mb-6">{hotel.description}</p>

            {hotel.amenities && hotel.amenities.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-primary-dark mb-3">
                  {t('hotelDetails.amenities' || 'Amenities')}
                </h2>
                <ul className="list-disc list-inside text-text-secondary">
                  {hotel.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <p className="text-text-secondary">
                <span className="font-semibold">{t('hotelDetails.checkIn' || 'Check-in')}:</span> {hotel.checkInTime}
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold">{t('hotelDetails.checkOut' || 'Check-out')}:</span> {hotel.checkOutTime}
              </p>
            </div>

            <button className="btn self-start">
              {t('hotelDetails.bookNow' || 'Book Now')}
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
  const hotelIds = ['hotel-abc', 'hotel-xyz'];
  const paths = hotelIds.map((id) => ({
    params: { hotelId: id },
    locale: 'en', // Generate for default locale
  }));

  // You might want to generate paths for other locales too
  const otherLocales = ['ar', 'es', 'pt', 'de'];
  otherLocales.forEach(locale => {
    hotelIds.forEach(id => {
      paths.push({ params: { hotelId: id }, locale: locale });
    });
  });

  return { paths, fallback: 'blocking' }; // 'blocking' shows loading state then fetches
}

export async function getStaticProps({ params, locale }) {
  // In a real app, fetch hotel data using params.hotelId
  // const hotelData = await fetchHotelDetails(params.hotelId);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'hotelDetails'])), // Include relevant namespaces
      // hotel: hotelData, // Pass fetched hotel data as prop
    },
    revalidate: 60, // Regenerate page every 60 seconds (ISR)
  };
}
