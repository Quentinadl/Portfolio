import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { lang, setLang } = useLanguage()
  const { theme, setTheme } = useTheme()

  // --- Actions ---
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  const toggleLang = () => setLang(prev => (prev === 'fr' ? 'en' : 'fr'))

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md 
      bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 
      transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Nom */}
        <div className="flex items-center gap-3">
          <img
            src="../assets/logos/Logo.png"
            alt="EY"
            className="h-8 w-auto"
          />
          <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-100">
            Quentin Adeline
          </span>
        </div>

        {/* Boutons Langue + Thème */}
        <div className="flex items-center gap-3">
          {/* Lang Toggle */}
          <button
            onClick={toggleLang}
            className="text-xs font-medium px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 
              hover:bg-emerald-100 dark:hover:bg-emerald-800 transition"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-2.5 py-1.5 rounded-md border border-gray-300 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 
              hover:bg-emerald-100 dark:hover:bg-emerald-800 transition text-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}
