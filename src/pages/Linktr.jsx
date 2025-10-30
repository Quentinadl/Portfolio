import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Linktr() {
  const { strings } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center 
                     ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Présentation */}
      <section className="flex flex-col items-center gap-4 py-16">
        <img
          src="/assets/Photo_de_profil.png"
          alt="Quentin Adeline"
          className="w-48 h-48 object-cover rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        />
        <h1 className="text-4xl font-custom">{strings.linktr_title}</h1>
        <p className="text-center">{strings.linktr_subtitle} <br /> {strings.linktr_subtitle2}</p>
      </section>

      {/* Liens sociaux / sites */}
      <section className="flex flex-col items-center gap-4 mb-12">
        {strings.linktr_links?.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-64 py-3 px-4 rounded-md text-center
                       transition hover:bg-emerald-700 dark:hover:bg-emerald-600
                       bg-gray-800 text-white"
          >
            <img src={link.icon} alt={link.label} className="w-6 h-6 mr-3" />
            {link.label}
          </a>
        ))}
      </section>
    </div>
  );
}
