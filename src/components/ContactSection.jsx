import React, { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactSection() {
  const formRef = useRef(null)
  const { strings } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(strings.send || 'Envoyé (simulation)')
    formRef.current.reset()
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-custom mb-6">{strings.contact_title || 'Contact'}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm">{strings.email_label || 'Email'}</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-emerald-600 focus:ring-emerald-600 dark:border-gray-600 dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="text-sm">{strings.message_label || 'Message'}</span>
                <textarea
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600 dark:border-gray-600 dark:bg-gray-800"
                ></textarea>
            </label>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
            >
              {strings.send || 'Envoyer'}
            </button>
          </form>

          <div className="space-y-3 text-sm">
            <p>
              <strong>{strings.contact_email || 'Email'} :</strong>{' '}
              <a
                href="mailto:quenitn.adeline18@gmail.com"
                className="text-emerald-700 hover:underline"
              >
                quenitn.adeline18@gmail.com
              </a>
            </p>
            <p>
              <strong>{strings.contact_phone || 'Téléphone'} :</strong>{' '}
              <a href="tel:+33614540702" className="text-emerald-700 hover:underline">
                06-14-54-07-02
              </a>
            </p>
            <p>
              <strong>{strings.contact_linkedin || 'LinkedIn'} :</strong>{' '}
              <a
                href="https://www.linkedin.com/in/quentin-adl/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:underline"
              >
                linkedin.com/in/quentin-adl
              </a>
            </p>
            <p>
              <strong>{strings.contact_website || 'Site web'} :</strong>{' '}
              <a
                href="https://www.quentin_adeline.com"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:underline"
              >
                quentin_adeline.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
