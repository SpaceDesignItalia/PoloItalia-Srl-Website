import React, { useEffect } from "react";
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
import Footer from "./Components/Layout/Footer";

function App() {
  const { t } = useTranslation();

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
