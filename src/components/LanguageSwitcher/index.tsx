'use client'

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
        className={`px-4 py-2 rounded-md text-sm font-medium transition 
          ${language === 'en' 
            ? 'bg-primary text-white cursor-default opacity-50' 
            : 'bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white'}`}
      >
        English
      </button>

      <button
        onClick={() => setLanguage('sq')}
        disabled={language === 'sq'}
        className={`px-4 py-2 rounded-md text-sm font-medium transition 
          ${language === 'sq' 
            ? 'bg-primary text-white cursor-default opacity-50' 
            : 'bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white'}`}
      >
        Shqip
      </button>
    </div>
  );
}
