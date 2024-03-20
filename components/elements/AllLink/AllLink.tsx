'use client'
import { useLang } from '@/hooks/useLang'
import styles from '@/styles/main-page/index.module.scss'
import Link from 'next/link'

const AllLink = () => {
  const { lang, translations } = useLang()

  return (
    <Link href='/catalog' className={styles.all}>
      <span />
      {translations[lang].common.all_link}
    </Link>
  )
}

export default AllLink
