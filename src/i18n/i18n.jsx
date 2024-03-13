// i18n.js
import { Description } from "@mui/icons-material";
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
        HeroText: "The refrigerant gases moving, dosing and filling company",
        HeroDesc: `Since 1998, polo is your perfect partner for customized process equipment handling all the refrigerant gases classified as A1, A2, A2L and A3 series.`,
        HeroCTA: "Speak with us!",
        Partners: "Partner",
        OurStrength: "Our Strengths",
        Strength1: {
          name: "Customization",
          description:
            "An engineering team for the mechanical, electrical and software design fully dedicated to the needs of the customers with a detailed customization of the produced equipment.",
        },
        Strength2: {
          name: "Quality",
          description:
            "Exclusive use of materials and components of the best worldwide brands including the most innovative technological solutions.",
        },
        Strength3: {
          name: "Service",
          description:
            "Wifi remote access to the equipment control board for any specific required modification and adjustment of the softwares.",
        },
        Product: {
          ProductTitle: "Product",
          ProductDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          ProductCTA: "Discover our products",
        },
        CustomersAroundWorld: "Polo in the world",
        ContactForm: {
          Title: "Contact us",
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          FirstName: "First Name",
          LastName: "Last Name",
          Email: "Email",
          Company: "Company Name",
          Message: "Message",
          SendButton: "Send Message",
        },
      },
      Contact: {
        Sales: "Sales",
        Service: "Service",
        Accounting: "Accounting and purchasing",
        Form: {
          Name: "Name",
          Surname: "Surname",
          Email: "Email",
          Object: "Object",
          Message: "Message",
          SendMessage: "Send Mail",
        },
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
        HeroText:
          "Specialisti per la movimentazione, il dosaggio e l’iniezione dei gas refrigeranti",
        HeroDesc: `Nata nel 1998, polo è partner ideale per sistemi personalizzati nell’utilizzo di tutti i gas refrigeranti appartenenti alle classi A1, A2, A2L ed A3.`,
        HeroCTA: "Parla con noi!",
        Partners: "Partner",

        OurStrength: "I nostri punti di forza",
        Strength1: {
          name: "Personalizzazione",
          description:
            "Uno staff di progettazione meccanica, elettrica e software esclusivamente dedicato alle richieste e le necessità dei clienti e conseguente personalizzazione nei minimi particolari delle unità prodotte.",
        },
        Strength2: {
          name: "Qualità",
          description:
            "L’utilizzo di materiali e componentistica delle migliori marche a livello mondiale con le più innovative soluzioni tecnologiche.",
        },
        Strength3: {
          name: "Assistenza",
          description:
            "Accesso remoto WiFi ai quadri di controllo delle apparecchiature per ogni possibile richiesta di modifica e miglioramento dei software gestionali.",
        },
        Product: {
          ProductTitle: "Prodotto",
          ProductDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          ProductCTA: "Scopri i nostri prodotti",
        },
        CustomersAroundWorld: "Polo nel mondo",
        ContactForm: {
          Title: "Contattaci",
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          FirstName: "Nome",
          LastName: "Cognome",
          Email: "Email",
          Company: "Nome Azienda",
          Message: "Messaggio",
          SendButton: "Invia Messaggio",
        },
      },
      Contact: {
        Sales: "Ufficio Commerciale",
        Service: "Post Vendita",
        Accounting: "Amministrazione e Fornitori",
        Form: {
          Name: "Nome",
          Surname: "Cognome",
          Email: "Email",
          Object: "Oggetto",
          Message: "Messaggio",
          SendMessage: "Invia messaggio",
        },
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
