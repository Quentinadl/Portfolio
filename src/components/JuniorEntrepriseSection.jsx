import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function JuniorEntrepriseSection() {
  const { lang, strings } = useLanguage()

  // Récupération des paragraphes traduits depuis les JSON
  const paragraphs = strings.je_paragraphs || []

  return (
    <section
      id="je"
      className="py-16 border-b border-gray-200 dark:border-gray-800 bg-emerald-50/30 dark:bg-gray-800/40"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-custom mb-8 text-center text-emerald-900 dark:text-emerald-300">
          {strings.je_title || 'Parcours Junior-Entreprise (SEPEFREI)'}
        </h2>

        <img
          src="/assets/SEPEFREI.png"
          alt="SEPEFREI"
          className="rounded-xl w-full mb-8 shadow-lg object-cover"
        />

        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-2">
          {paragraphs.map((p, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
