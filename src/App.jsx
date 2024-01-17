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

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    const linguaSalvata = localStorage.getItem("lingua");
    if (linguaSalvata) {
      i18n.changeLanguage(linguaSalvata);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
