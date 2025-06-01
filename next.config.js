/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar', 'es', 'pt', 'de'], // تأكد من وجود جميع اللغات هنا
    defaultLocale: 'en', // اللغة الافتراضية
    localeDetection: true, // يكتشف اللغة من رأس الطلب أو المسار
  },
};

module.exports = nextConfig;
