import { useEffect } from 'react'
import { useLang } from './useLang'

export const usePageTitle = (page: string, additionalText = '') => {
  const { lang, translations } = useLang()

  useEffect(() => {
    document.title = `${lang === 'es' ? 'Tienda Donets' : 'Donets Shop'} | ${
      (translations[lang].breadcrumbs as { [index: string]: string })[page]
    }${additionalText ? ` - ${additionalText}` : ''}`
  }, [additionalText, lang, page, translations])
}
