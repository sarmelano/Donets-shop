'use client'
import { useUnit } from 'effector-react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'
import { openMenu, openSearchModal } from '@/context/modals'
import {
  addOverflowHiddenFromBody,
  handleOpenAuthPopup,
} from '@/lib/utils/common'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import '@/app/globalStyles/header.css'
import CartPopup from './CartPopup/CartPopup'
import HeaderProfile from './HeaderProfile'
import { $isAuth } from '@/context/auth'

const Header = () => {
  const isAuth = useUnit($isAuth)
  const loginCheckSpinner = false
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenFromBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenFromBody()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              onClick={handleOpenSearchModal}
              className='btn-reset header__links__item__btn header__links__item__btn--search'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <CartPopup />
          </li>
          <li className='header__links__item header__links__item__btn--profile'>
            {isAuth ? (
              <HeaderProfile />
            ) : loginCheckSpinner ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <button
                className='btn-reset header__links__item__btn header__links__item__btn--profile'
                onClick={handleOpenAuthPopup}
              />
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
