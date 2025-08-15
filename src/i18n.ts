import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      // This path works perfectly for Create React App or Vite's public folder
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
  });

export default i18n;