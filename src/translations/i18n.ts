import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';

export const resources: Record<string, { translation: typeof en }> = {
  en: { translation: en },
  fr: { translation: fr },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // fix Android error
  lng: getLocales()[0].languageCode ?? 'en',
  fallbackLng: 'en',
  resources,
});

export default i18n;
