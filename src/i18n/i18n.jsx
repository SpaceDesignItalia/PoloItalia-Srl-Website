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
        HeroDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
        HeroCTA: "Speak with us!",
        Partners: "Successful partners",
        OurStrength: "Our Strengths",

        Product1: "Product 1",
        Product1desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

        Product2: "Product 2",
        Product2desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

        CustomersAroundWorld: "Customers around the world",
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
        HeroDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
        HeroCTA: "Parla con noi!",
        Partners: "Partners di successo",

        OurStrength: "I nostri punti di forza",

        Product1: "Prodotto 1",
        Product1desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

        Product2: "Prodotto 2",
        Product2desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

        CustomersAroundWorld: "Clienti in tutto il mondo",
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
