import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { strings } = useLanguage();
  const experiences = strings.experiences || [];

  return (
    <section
      id="experience"
      className="py-14 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-custom mb-6 text-gray-900 dark:text-gray-100">
          {strings.experience_title || "Expériences Professionnelles"}
        </h2>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-none flex flex-col md:flex-row gap-4 items-start card-hover"
            >
              {exp.logo && (
                <div className="flex-shrink-0 w-full md:w-20 flex justify-center md:justify-start mb-3 md:mb-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              )}

              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                  {exp.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {exp.company} — {exp.period}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                  {exp.description}
                </p>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-emerald-700 dark:text-emerald-300 text-xs font-medium hover:underline"
                  >
                    {strings.experience_visit || "Visiter le site"} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
