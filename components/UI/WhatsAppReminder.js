// components/UI/WhatsAppReminder.js
import { useTranslation } from 'next-i18next';

/**
 * WhatsAppReminder Component
 *
 * This component displays a reminder message for users to receive
 * flight/hotel reminders via WhatsApp.
 *
 * @returns {JSX.Element} The WhatsAppReminder component.
 */
const WhatsAppReminder = () => {
  const { t } = useTranslation('whatsapp'); // تحديد namespace 'whatsapp'
  return (
    <div className="bg-green-100 p-4 rounded shadow text-center max-w-md mx-auto my-8 border border-green-200">
      <h3 className="text-xl font-semibold text-green-700 mb-2">{t('title')}</h3>
      <p className="text-green-600 mb-4">{t('description')}</p>
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-colors duration-300">
        {t('button')}
      </button>
    </div>
  );
};

export default WhatsAppReminder;
