// pages/_app.js
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router'; // استيراد useRouter

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // تحديد اتجاه النص (ltr/rtl) بناءً على اللغة الحالية
  const dir = router.locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <Head>
        <title>Onzono SkyConnect - Your Journey Starts Here</title>
        <meta name="description" content="Book flights, discover lounges, and plan your perfect travel experience with Onzono SkyConnect." />
        <link rel="icon" href="/favicon.ico" />
        {/* استيراد خطوط Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      {/* تطبيق اتجاه النص على العنصر الجذر للتطبيق */}
      <div dir={dir} className="flex flex-col min-h-screen bg-background-light">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
