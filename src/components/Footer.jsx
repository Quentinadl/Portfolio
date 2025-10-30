import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang, strings } = useLanguage()
  
  return (
    <footer className="py-6 border-t text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
      © 2025 Quentin Adeline — {strings.footer_rights || (lang === 'en' ? 'All rights reserved' : 'Tous droits réservés')}
    </footer>
  )
}
