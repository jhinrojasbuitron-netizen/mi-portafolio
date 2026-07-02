import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isChangingLang, setIsChangingLang] = useState(false);

  const handleLanguageChange = () => {
    setIsChangingLang(true);
    setTimeout(() => {
      setLanguage(prev => {
        const newLang = prev === 'es' ? 'en' : 'es';
        localStorage.setItem('language', newLang);
        return newLang;
      });
      setTimeout(() => setIsChangingLang(false), 300);
    }, 200);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'es' | 'en';
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  return {
    language,
    setLanguage,
    isChangingLang,
    handleLanguageChange
  };
}