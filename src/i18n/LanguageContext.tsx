import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Locale } from '../types';
import { dictionaries, type Dict } from './translations';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'hb-locale';
const supported: Locale[] = ['fr', 'en', 'ar'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    return saved && supported.includes(saved) ? saved : 'fr';
  });

  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, dir]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale: setLocaleState, t: dictionaries[locale], dir }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
