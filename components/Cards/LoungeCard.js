// components/Cards/LoungeCard.js
import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

/**
 * LoungeCard Component
 *
 * This component displays a summary of a lounge, including its location,
 * key services, and an optional image. It also provides a link to more details.
 *
 * @param {object} props - The component props.
 * @param {string} props.id - Unique ID for the lounge (useful for details link).
 * @param {string} props.name - The name of the lounge.
 * @param {string} props.location - The geographical location of the lounge (e.g., "Riyadh Airport, Terminal 1").
 * @param {string[]} props.services - An array of services offered by the lounge (e.g., ["Wi-Fi", "Food & Beverages", "Showers"]).
 * @param {string} [props.image] - The URL of an image representing the lounge.
 * @param {string} [props.hours] - Operating hours of the lounge.
 * @param {string} [props.contact] - Contact number for the lounge.
 * @param {string} [props.description] - A brief description of the lounge.
 * @returns {JSX.Element} The LoungeCard component.
 */
const LoungeCard = ({ id, name, location, services, image, hours, contact, description }) => {
  const { t } = useTranslation(['lounges', 'common']); // تحديد namespaces
  const { t: commonT } = useTranslation('common'); // للوصول لـ common.learnMoreButton

  // بناء رابط التفاصيل ديناميكياً
  const detailsLink = `/lounges/${id}`; // افتراض أن لديك صفحة ديناميكية مثل pages/lounges/[id].js

  return (
    <div className="card bg-white bg-opacity-90 text-text-primary fadeIn p-6">
      {image && (
        <Image
          src={image}
          alt={t('imageAlt', { name })}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
          priority={false}
        />
      )}

      <h3 className="text-xl font-bold mb-2 text-primary-dark">{name}</h3>

      <p className="text-text-secondary text-base mb-2">
        <span className="font-semibold">{t('locationLabel')}:</span> {location}
      </p>

      {services && services.length > 0 && (
        <div className="mb-2">
          <p className="font-semibold text-text-secondary mb-1">{t('servicesLabel')}:</p>
          <ul className="list-disc list-inside text-text-secondary text-sm ml-4">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      )}

      {hours && (
        <p className="text-text-secondary text-sm mb-2">
          <span className="font-semibold">{t('hoursLabel')}:</span> {hours}
        </p>
      )}

      {contact && (
        <p className="text-text-secondary text-sm mb-4">
          {t('contactNumber', { number: contact })}
        </p>
      )}

      {description && (
        <p className="text-text-secondary text-sm mb-4">
          {description}
        </p>
      )}

      <Link href={detailsLink} className="btn-secondary mt-auto block text-center">
        {commonT('common.learnMoreButton')}
      </Link>
    </div>
  );
};

export default LoungeCard;
