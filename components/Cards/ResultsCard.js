// components/Cards/ResultsCard.js
import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

/**
 * ResultsCard Component
 *
 * This component displays a summary of a search result,
 * whether it's a flight or a hotel. It includes details like
 * origin, destination, price, duration, and an optional image.
 *
 * @param {object} props - The component props.
 * @param {string} props.type - The type of result ('flight' or 'hotel').
 * @param {string} props.from - The origin (for flights) or irrelevant (for hotels).
 * @param {string} props.to - The destination (city/country for flight, city/hotel name for hotel).
 * @param {string|number} props.price - The price of the flight/hotel.
 * @param {string} [props.duration] - The duration of the flight (optional for hotels).
 * @param {string} [props.image] - The URL of an image related to the result.
 * @param {string} props.detailsLink - The URL to navigate to for more details.
 * @returns {JSX.Element} The ResultsCard component.
 */
const ResultsCard = ({ type, from, to, price, duration, image, detailsLink }) => {
  const { t } = useTranslation(['results', 'common']); // تحديد namespaces
  const { t: commonT } = useTranslation('common'); // للوصول لـ common.currency

  const cardTitle = type === 'flight' ? t('flightTo', { to }) : t('hotelIn', { to });

  return (
    <div className="card bg-white bg-opacity-90 text-text-primary fadeIn">
      {image && (
        <Image
          src={image}
          alt={t('imageAlt', { type, to })}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
          priority={false}
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{cardTitle}</h3>

      {type === 'flight' && from && (
        <p className="text-text-secondary text-sm mb-1">{t('fromLabel')}: {from}</p>
      )}
      <p className="text-text-secondary text-sm mb-1">
        {t('priceLabel')}: {price} {commonT('common.currency')}
      </p>

      {type === 'flight' && duration && (
        <p className="text-text-secondary text-sm mb-4">
          {t('durationLabel')}: {duration}
        </p>
      )}

      <Link href={detailsLink} className="btn-secondary mt-auto block text-center">
        {commonT('common.learnMoreButton')}
      </Link>
    </div>
  );
};

export default ResultsCard;
