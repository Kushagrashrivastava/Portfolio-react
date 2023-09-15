import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Route, Routes } from "react-router-dom";
import enTranslation from './assets/contentEnglish.json';
import hiTranslation from './assets/contentHindi.json';
import frTranslation from './assets/contentFrench.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );  
};

export default App;
