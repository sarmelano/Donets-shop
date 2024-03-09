import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import { $menuIsOpen, closeMenu } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import { useState } from 'react'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToEs = () => handleSwitchLang('es')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handleCloseMenu}
      />
      <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
        <button
          className={`btn-reset nav-menu__lang__btn ${
            lang === 'es' ? 'lang-active' : ''
          }`}
          onClick={handleSwitchLangToEs}
        >
          ES
        </button>
        <button
          className={`btn-reset nav-menu__lang__btn ${
            lang === 'en' ? 'lang-active' : ''
          }`}
          onClick={handleSwitchLangToEn}
        >
          EN
        </button>
      </div>
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu
