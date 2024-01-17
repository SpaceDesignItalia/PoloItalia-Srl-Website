// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Navbar: {
        Product: "Products",
        Contact: "Contact Us",
        Products: {
          Product1: "Product 1",
          Product1Desc: "Product 1 Description",
          Product2: "Product 2",
          Product2Desc: "Product 2 Description",
        },
      },
      Home: {
        HeroText: "The best way to learn a language is to speak it.",
        HeroCTA: "Speak with us!",
      },
    },
  },
  it: {
    translation: {
      Navbar: {
        Product: "Prodotti",
        Contact: "Contattaci",
        Products: {
          Product1: "Prodotto 1",
          Product1Desc: "Descrizione prodotto 1",
          Product2: "Prodotto 2",
          Product2Desc: "Descrizione prodotto 2",
        },
      },
      Home: {
        HeroText: "Il modo migliore per imparare una lingua è parlarla.",
        HeroCTA: "Parla con noi!",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Lingua predefinita
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
