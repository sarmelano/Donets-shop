'use client'
import Link from 'next/link'
import {
  closeCatalotMenu,
  closeMenu,
  openCatalotMenu,
  openMenu,
} from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenFromBody } from '@/lib/utils/common'
import CatalogMenu from '../Header/CatalogMenu'

const MobileNavbar = () => {
  const { lang, translations } = useLang() //translation

  const handleOpenMenu = () => {
    addOverflowHiddenFromBody()
    openMenu()
    closeCatalotMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenFromBody('0')
    openCatalotMenu()
    closeMenu()
  }

  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href='/' className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.main}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenCatalogMenu}
        >
          {translations[lang].breadcrumbs.catalog}
        </button>
        <Link href='/favorites' className='btn-reset mobile-navbar__btn'>
          {translations[lang].breadcrumbs.favorites}
        </Link>
        <Link href='/cart' className='btn-reset mobile-navbar__btn'>
          {translations[lang].breadcrumbs.cart}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenMenu}
        >
          {translations[lang].common.more}
        </button>
      </div>
    </>
  )
}

export default MobileNavbar
