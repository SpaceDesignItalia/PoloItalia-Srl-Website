// i18n.js
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
        HeroDesc: `Since 1998, POLO is your perfect partner for customized process equipment handling all the refrigerant gases classified as A1, A2, A2L and A3 series.`,
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
            "Explore our wide range of high-quality products designed to meet your needs. At POLO, you'll find customized solutions for the use of refrigerant gases belonging to classes A1, A2, A2L, and A3. With over 25 years of experience in the industry, POLO offers reliable and secure systems, ensuring optimal performance in every application.",
          ProductCTA: "Discover our products",
        },
        CustomersAroundWorld: "Polo in the world",
        ContactForm: {
          Title: "Contact us",
          Description:
            "Do you have any questions, suggestions, or requests? Feel free to reach out to us! Fill out the form below, and we'll get back to you as soon as possible. Alternatively, you can also email us directly or give us a call. Thank you for contacting us and for your interest!",
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
        HeroDesc: `Nata nel 1998, POLO è partner ideale per sistemi personalizzati nell’utilizzo di tutti i gas refrigeranti appartenenti alle classi A1, A2, A2L ed A3.`,
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
            "Scopri la nostra vasta gamma di prodotti di alta qualità, progettati per soddisfare le tue esigenze. Da noi, troverai soluzioni personalizzate per l'utilizzo di gas refrigeranti appartenenti alle classi A1, A2, A2L ed A3. Con oltre 25 anni di esperienza nel settore, POLO offre sistemi affidabili e sicuri, garantendo prestazioni ottimali in ogni applicazione. ",
          ProductCTA: "Scopri i nostri prodotti",
        },
        CustomersAroundWorld: "Polo nel mondo",
        ContactForm: {
          Title: "Contattaci",
          Description:
            "Hai domande, suggerimenti o richieste? Non esitare a contattarci! Compila il modulo qui sotto e saremo lieti di risponderti al più presto possibile. Se preferisci, puoi anche scriverci direttamente via email o chiamarci. Grazie per averci contattato e per il tuo interesse!",
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
