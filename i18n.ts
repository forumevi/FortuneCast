import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Welcome", join: "Join Waitlist" } },
    tr: { translation: { welcome: "Hoşgeldiniz", join: "Bekleme Listesine Katıl" } }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
