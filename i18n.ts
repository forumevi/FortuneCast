import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Fortune Cast!",
        join_waitlist: "Join the Waitlist",
        enter_email: "Enter your email"
      }
    },
    tr: {
      translation: {
        welcome: "FortuneCast'e Hoşgeldiniz!",
        join_waitlist: "Bekleme Listesine Katıl",
        enter_email: "E-posta adresinizi girin"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
