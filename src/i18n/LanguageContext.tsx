import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

export type Language = 'en' | 'fr' | 'ar';
type TranslationsRecord = Record<string, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Check local storage for saved language, otherwise default to "fr"
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update HTML dir attribute for RTL support
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const dict = translations[language] as TranslationsRecord;
    // Fallback to English if translation is missing, or return the key
    if (dict && dict[key]) {
      return dict[key];
    }
    const enDict = translations['en'] as TranslationsRecord;
    if (enDict && enDict[key]) {
      return enDict[key];
    }
    return key;
  };

  const value = {
    language,
    setLanguage,
    t,
    dir: (language === 'ar' ? 'rtl' : 'ltr') as 'rtl' | 'ltr'
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
