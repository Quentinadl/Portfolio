import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function HeroSection() {
  const { strings } = useLanguage()

  const name = strings.hero_title || 'Quentin Adeline'
  const subtitle = strings.hero_sub || 'Auditeur en Cybersécurité | Secteur Financier @EY'
  const subtitle2 = strings.hero_sub2 || 'Président @SEPEFREI Junior-Entreprise'
  const ctaExp = strings.hero_cta_experience || 'Voir mon parcours'
  const ctaContact = strings.hero_cta_contact || 'Me contacter'

  return (
    <section className="pt-28 pb-16 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-emerald-50 to-white dark:from-transparent">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* --- Texte --- */}
        <div className="md:w-2/3">
          <h1 className="text-6xl font-custom text-gray-900 dark:text-gray-100 leading-tight">
            {name}
          </h1>
          <p className="text-emerald-700 font-medium mt-2 dark:text-emerald-300">
            {subtitle}
            <br />
            {subtitle2}
          </p>


          {/* --- Boutons CTA --- */}
          <div className="mt-8 flex gap-4">
            <a
              href="#experience"
              className="px-6 py-3 bg-emerald-700 text-white rounded-md shadow 
                hover:bg-emerald-800 transition-colors duration-300"
            >
              {ctaExp}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-emerald-700 text-emerald-700 
                hover:bg-emerald-700 hover:text-white rounded-md transition-colors duration-300"
            >
              {ctaContact}
            </a>
          </div>
        </div>

        {/* --- Image --- */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/assets/Photo_de_profil.png"
            alt="Photo Quentin Adeline"
            className="w-72 h-72 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
