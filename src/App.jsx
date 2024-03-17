import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/Layout/NavBar";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Layout/Footer";
import OurProducts from "./Pages/Home/OurProducts";
import ProductPage from "./Pages/Home/ProductPage";

function App() {
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    const linguaSalvata = localStorage.getItem("lingua");

    if (linguaSalvata) {
      i18n.changeLanguage(linguaSalvata);
    } else {
      // Se non esiste una lingua salvata, imposta l'inglese come predefinita
      i18n.changeLanguage("en");
      localStorage.setItem("lingua", "en");
    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/it" element={<Contact />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/ourProducts/it" element={<OurProducts />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        <Route path="/Product/:id/it" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
