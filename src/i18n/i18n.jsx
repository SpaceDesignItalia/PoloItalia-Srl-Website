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
          ProductTitle: "Products",
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
      OurProducts: {
        OurProds: "Our products",
        ExploreProduct: "Explore in detail",
        Product1: "MRC",
        Product1desc:
          "Vacuum and charging equipment of refrigerant gases for cooling circuits and heat pumps.",
        Product2: "FASTO",
        Product2desc:
          "Vacuum and charging equipment of refrigerant gases for medium/large cylinders and drums.",
        Product3: "LATA",
        Product3desc:
          "Automatic filling lines of refrigerant gases for small aerosol cans.",
        Product4: "UNO REC",
        Product4desc:
          "Recovery equipment of the refrigerant gases in liquid and vapor phase from any storage tanks and volume.",
        Product5: "PTG",
        Product5desc:
          "Mechanical pumps pneumatically driven for the transfer and pressurization of the refrigerant gases up to high-pressure values.",
        Product6: "FASTO CO2",
        Product6desc:
          "Vacuum and charging equipment of carbon dioxide for small and medium cylinders for medical and food applications.",
        Product7: "PLD",
        Product7desc:
          "Infrared technology equipment for the leak detection of the refrigerant gases.",
      },
      Footer: {
        FooterPhrase:
          "Customized solutions for vacuum, leak testing and gas charging",
      },
      Error404: {
        ErrorTitle: "Page not found",
        ErrorDesc: "Sorry, we couldn’t find the page you’re looking for.",
        ErrorCTA: "Go back home",
      },
    },
  },
  it: {
    translation: {
      Navbar: {
        Product: "Prodotti",
        Contact: "Contattaci",
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
          ProductTitle: "Prodotti",
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
      OurProducts: {
        OurProds: "I nostri prodotti",
        ExploreProduct: "Esplora nel dettaglio",
        Product1: "MRC",
        Product1desc:
          "Unità di vuoto e carica dei gas refrigeranti per circuiti frigogeni e pompe di calore.",
        Product2: "FASTO",
        Product2desc:
          "Unità di vuoto e carica dei gas refrigeranti in bombole e drums di medie e grandi dimensioni.",
        Product3: "LATA",
        Product3desc:
          "Linee automatiche di riempimento dei gas refrigeranti per piccole bombole tipo aerosol.",
        Product4: "UNO REC",
        Product4desc:
          "Unità di recupero dei gas refrigeranti negli stati di liquido e vapori da qualsiasi tipo di contenitore e relativo volume.",
        Product5: "PTG",
        Product5desc:
          "Pompe meccaniche a comando pneumatico per il trasferimento e la pressurizzazione dei gas refrigeranti ad alte pressioni.",
        Product6: "FASTO CO2",
        Product6desc:
          "Unità di vuoto e carica di anidride carbonica in medie e piccole bombole ad uso medicale ed alimentare.",
        Product7: "PLD",
        Product7desc:
          "Unità per la ricerca delle perdite dei gas refrigeranti con tecnologia all'infrarosso.",
      },
      Footer: {
        FooterPhrase:
          "Dal 1998 soluzioni di vuoto, ricerca perdite e misura gas per la tua Azienda",
      },
      Error404: {
        ErrorTitle: "Pagina non trovata",
        ErrorDesc:
          "Siamo spiacenti, ma la pagina che stai cercando non è disponibile al momento. Potrebbe essere stata rimossa, rinominata o potresti aver digitato un URL errato.",
        ErrorCTA: "Torna alla home",
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
