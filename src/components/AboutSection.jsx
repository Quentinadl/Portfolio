import React from 'react'
import { useLanguage } from '../context/LanguageContext'

// Icônes (Lucide ou HeroIcons par exemple)
import { ShieldCheck, Server, Database, Code2, BarChart3, Workflow } from 'lucide-react'

export default function AboutSection() {
  const { strings } = useLanguage()

  // Les compétences sont maintenant récupérées depuis le fichier de langue
  const skills = strings.skills || []

  // Association compétence → icône
  const skillIcons = [
    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Workflow className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
  ]

  return (
    <section id="about" className="py-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre */}
        <h2 className="text-3xl font-custom mb-6 text-gray-900 dark:text-gray-100">
          {strings.about_title || 'À propos'}
        </h2>

        {/* Texte principal */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          {strings.about_text || ''}
        </p>

        {/* Compétences */}
        <h3 className="text-3xl font-custom mb-6 text-gray-900 dark:text-gray-100">
          {strings.skills_title || 'Compétences clés'}
        </h3>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-emerald-50/60 dark:bg-gray-800/50 p-3 rounded-lg border border-emerald-100 dark:border-gray-700 hover:shadow-md transition"
            >
              {skillIcons[i] || <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
              <span className="text-sm text-gray-800 dark:text-gray-200">{s}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
