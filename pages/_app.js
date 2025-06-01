// pages/_app.js
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * MyApp Component
 *
 * This is the custom App component for the Next.js application.
 * It wraps all pages, enabling global styles, internationalization (i18n)
 * via next-i18next, and common HTML head elements (like fonts and meta tags).
 *
 * @param {object} props - The component props.
 * @param {React.ComponentType} props.Component - The active page component.
 * @param {object} props.pageProps - Initial props for the page component.
 * @returns {JSX.Element} The Next.js application wrapper.
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Effect to set dir attribute on <html> tag for RTL languages
  useEffect(() => {
    document.documentElement.dir = router.locale === 'ar' ? 'rtl' : 'ltr';
  }, [router.locale]);

  return (
    <>
      <Head>
        {/* عنوان افتراضي للموقع (يمكن Overrideه في كل صفحة) */}
        <title>Onzono SkyConnect - Your Journey Starts Here</title>
        {/* وصف للموقع لتحسين SEO */}
        <meta name="description" content="Book flights, discover lounges, and plan your perfect travel experience with Onzono SkyConnect." />
        {/* أيقونة الموقع (Favicon) */}
        <link rel="icon" href="/favicon.ico" />

        {/* استيراد خطوط Google Fonts المستخدمة في globals.css */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* الـ div الرئيسي هذا (الذي سيكون #__next في الـ DOM)
        يتلقى أنماط الخلفية والارتفاع الأدنى من globals.css.
        هذا يضمن أن الفوتر يلتصق بالأسفل وأن الخلفية تغطي الصفحة بأكملها.
      */}
      <div className="flex flex-col min-h-screen bg-background-light text-text-primary">
        <Component {...pageProps} />
      </div>
    </>
  );
}

// Wrap the MyApp component with appWithTranslation to enable i18n
export default appWithTranslation(MyApp);
