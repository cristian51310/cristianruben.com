import { showDefaultLang, ui } from './ui';

export function useTranslate(lang: string | undefined) {
  if (lang === "en") {
    return function t(key: keyof typeof ui["en"]) {
      return ui["en"][key];
    }
  }

  return function t(key: keyof typeof ui["es"]) {
    return ui["es"][key];
  }
}

export function useTranslateLink(lang: string | undefined) {
  if (lang === "en") {
    return function translate(path: string) {
      return !showDefaultLang && `/${"en"}${path}`
    }
  }

  return function translate(path: string) {
    return !showDefaultLang && path
  }
}
