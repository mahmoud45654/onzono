const SUPPORTED_LOCALES = ['en', 'ar', 'es', 'pt', 'de'];

const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: SUPPORTED_LOCALES,
  },
  // تفعيل إعادة التحميل في وضع التطوير لرؤية التغييرات فوراً
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = nextI18NextConfig;
