import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './i18n';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // fix Android error
  lng: 'fr',
  fallbackLng: 'fr',
  ns: Object.keys(resources.fr),
  resources,
});
export default i18n;
