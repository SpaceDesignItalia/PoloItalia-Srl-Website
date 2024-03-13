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
import { t } from "i18next";

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
        // Assuming you have translations for products in i18next
        const product1 = t("Navbar.Products.Product1");
        const product1Desc = t("Navbar.Products.Product1Desc");
        const product2 = t("Navbar.Products.Product2");
        const product2Desc = t("Navbar.Products.Product2Desc");

        const productsData = [
          {
            name: product1,
            description: product1Desc,
            href: "#",
            icon: ChartPieIcon,
          },
          {
            name: product2,
            description: product2Desc,
            href: "#",
            icon: CursorArrowRaysIcon,
          },
        ];

        setProducts(productsData);
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
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-16 w-auto" src={Logo} alt="" />
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
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              {t("Navbar.Product")}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href={selectedLanguage === "it" ? "/contact/it" : "/contact"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {t("Navbar.Contact")}
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contattaci
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
