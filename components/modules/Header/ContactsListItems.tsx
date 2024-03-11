import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='#'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +1 (559) *** ** **
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='mailto:developer.sarmelano@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/veslam'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.Whatsapp}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://www.instagram.com/dima_donets/'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.insta}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
