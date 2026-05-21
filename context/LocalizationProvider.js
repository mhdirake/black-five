"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, getDirection, isLocale } from "@/localization/config";
import { messages } from "@/localization/messages";

const LocalizationContext = createContext(null);

function setLocaleCookie(locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function LocalizationProvider({ children, initialLocale = DEFAULT_LOCALE }) {
  const [locale, setLocaleState] = useState(isLocale(initialLocale) ? initialLocale : DEFAULT_LOCALE);

  const direction = getDirection(locale);
  const dictionary = messages[locale] || messages[DEFAULT_LOCALE];

  const setLocale = (nextLocale) => {
    if (!isLocale(nextLocale)) return;
    setLocaleState(nextLocale);
    setLocaleCookie(nextLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === LOCALES.fa ? LOCALES.en : LOCALES.fa);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, locale]);

  const value = useMemo(
    () => ({
      locale,
      direction,
      dictionary,
      isRtl: direction === "rtl",
      setLocale,
      toggleLocale,
    }),
    [dictionary, direction, locale]
  );

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
}

export function useLocalization() {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error("useLocalization must be used inside LocalizationProvider");
  }

  return context;
}

export default LocalizationProvider;
