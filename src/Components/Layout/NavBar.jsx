import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../../assets/logo.jpg";
import i18n from "../../i18n/i18n";
import { Button } from "@mui/base";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const selectedLanguage = localStorage.getItem("lingua");
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated API call or data load
    const fetchData = async () => {
      try {
      } catch (error) {
        console.error("Error loading products data:", error);
        setProducts([]); // Set products to an empty array or handle the error accordingly
      }
    };

    fetchData();
  }, [selectedLanguage]);

  const cambiaLingua = (lingua) => {
    if (lingua === selectedLanguage) {
      // Se l'utente prova a selezionare la stessa lingua, non fare nulla
      return;
    }

    i18n.changeLanguage(lingua);
    localStorage.setItem("lingua", lingua);

    let newUrl = location.pathname;
    // Verifica se l'URL contiene già '/it'
    const isItalianUrl = newUrl.includes("/it");

    if (lingua === "it" && !isItalianUrl) {
      // Aggiungi '/it' solo se non è già presente nell'URL
      newUrl += "/it";
    } else if (lingua === "en" && isItalianUrl) {
      // Rimuovi '/it' se l'utente passa all'inglese
      newUrl = newUrl.replace("/it", "");
    }

    navigate(newUrl, { replace: true });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-20 w-auto" src={Logo} alt="" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-lg font-semibold leading-6 text-gray-900">
            Home
          </a>
          <Button
            href="/ourProducts"
            className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900"
          >
            {t("Navbar.Product")}
          </Button>

          <a
            href={selectedLanguage === "it" ? "/contact/it" : "/contact"}
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            {t("Navbar.Contact")}
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex flex-row gap-3 justify-center items-center">
            <button
              onClick={() => cambiaLingua("en")}
              className={`text-lg font-semibold text-gray-900 focus:outline-none ${
                selectedLanguage === "en" ? "underline italic" : ""
              }`}
            >
              English
            </button>
            <span className="text-gray-900">|</span>
            <button
              onClick={() => cambiaLingua("it")}
              className={`text-lg font-semibold text-gray-900 focus:outline-none ${
                selectedLanguage === "it" ? "underline italic" : ""
              }`}
            >
              Italiano
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-12 w-auto" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/ourProducts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("Navbar.Product")}
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("Navbar.Contact")}
                </a>
              </div>
              <div className="py-6">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <button
                    onClick={() => cambiaLingua("en")}
                    className={`text-sm font-semibold text-gray-900 focus:outline-none ${
                      selectedLanguage === "en" ? "underline italic" : ""
                    }`}
                  >
                    English
                  </button>
                  <span className="text-gray-900">|</span>
                  <button
                    onClick={() => cambiaLingua("it")}
                    className={`text-sm font-semibold text-gray-900 focus:outline-none ${
                      selectedLanguage === "it" ? "underline italic" : ""
                    }`}
                  >
                    Italiano
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
