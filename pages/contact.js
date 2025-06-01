// pages/contact.js
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

/**
 * Contact Page Component
 *
 * This component provides contact information and a form for users to reach out.
 *
 * @returns {JSX.Element} The Contact Us page component.
 */
export default function ContactPage() {
  const { t } = useTranslation(['common', 'contact']); // Assuming 'contact.json' for specific content

  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto p-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary-dark">
          {t('nav.contact')}
        </h1>
        <section className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-text-primary max-w-2xl mx-auto">
          <p className="mb-4 text-lg text-center">
            {t('contact.intro' || 'Have questions or need assistance? Reach out to us through the following channels or fill out the form below.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary-color">
                {t('contact.generalInquiries' || 'General Inquiries')}
              </h2>
              <p className="text-text-secondary">
                <span className="font-semibold">{t('contact.emailLabel' || 'Email')}:</span> info@onzonoskyconnect.com
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold">{t('contact.phoneLabel' || 'Phone')}:</span> +1 (800) 123-4567
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-primary-color">
                {t('contact.customerSupport' || 'Customer Support')}
              </h2>
              <p className="text-text-secondary">
                <span className="font-semibold">{t('contact.emailLabel' || 'Email')}:</span> support@onzonoskyconnect.com
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold">{t('contact.phoneLabel' || 'Phone')}:</span> +1 (800) 987-6543
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6 text-primary-dark">
            {t('contact.sendUsMessage' || 'Send Us a Message')}
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('contact.nameLabel' || 'Your Name')}
              </label>
              <input type="text" id="name" className="form-input w-full" placeholder={t('contact.namePlaceholder' || 'Enter your name')} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('contact.emailLabel' || 'Your Email')}
              </label>
              <input type="email" id="email" className="form-input w-full" placeholder={t('contact.emailPlaceholder' || 'Enter your email')} required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('contact.subjectLabel' || 'Subject')}
              </label>
              <input type="text" id="subject" className="form-input w-full" placeholder={t('contact.subjectPlaceholder' || 'Subject of your inquiry')} required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('contact.messageLabel' || 'Your Message')}
              </label>
              <textarea id="message" rows="5" className="form-input w-full" placeholder={t('contact.messagePlaceholder' || 'Type your message here...')} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn">
                {t('contact.sendMessageButton' || 'Send Message')}
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])), // 'contact' namespace is assumed
    },
  };
}
