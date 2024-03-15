import Link from 'next/link'
import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import FooterLinks from './FooterLinks'
import FooterMobileLink from './FooterMobileLink'

const Footer = () => {
  const { lang, translations } = useLang()
  const isMedia950 = useMediaQuery(950) //break points
  const isMedia640 = useMediaQuery(640)

  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='#'>+1 (559) *** ** **</a>
            </span>
            <span>
              <a href='mailto:developer.sarmelano@gmail.com'>
                developer.sarmelano@gmail.com
              </a>
            </span>
            {isMedia950 && <FooterLinks />}
          </div>
          {!isMedia950 && <FooterLinks />}
          <ul className='list-reset footer__socials'>
            <li className='footer__socials__item'>
              <a
                className='footer__socials__item__link'
                href='https://www.instagram.com/dima_donets/'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                className='footer__socials__item__link'
                href='https://vercel.com/sarmelanos-projects'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                className='footer__socials__item__link'
                href='mailto:developer.sarmelano@gmail.com'
              />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container footer__bottom__container'>
          <div className='footer__copyright'>
            {translations[lang].footer.copyright}
          </div>
          <div className='footer__policy'>
            <div className='footer__policy__inner'>
              <Link href='/data-processing-policy'>
                {translations[lang].footer.policy}
              </Link>
              <Link href='/privacy-policy'>
                {translations[lang].footer.privacy}
              </Link>
            </div>
            {isMedia640 && (
              <FooterMobileLink text={translations[lang].footer.full_version} />
            )}
          </div>
          {!isMedia640 && (
            <FooterMobileLink text={translations[lang].footer.mobile_version} />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
