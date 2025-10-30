import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext"; // <-- ajouté

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import JuniorEntreprise from "./components/JuniorEntrepriseSection";
import Contact from "./components/ContactSection";

import Linktr from "./pages/Linktr";

export default function App() {
  return (
    <ThemeProvider> {/* <-- ajouté */}
      <LanguageProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <AboutSection />
                  <ExperienceSection />
                  <JuniorEntreprise />
                  <Contact />

                </>
              }
            />
            <Route path="/linktr" element={<Linktr />} />
          </Routes>
            <Footer />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
