'use client'
import { useLang } from '@/hooks/useLang'
import styles from '@/styles/product-list-item/index.module.scss'

const ProductColor = ({ color }: { color: string }) => {
  const { lang, translations } = useLang()

  return (
    <span className={styles.product__color}>
      {/** @ts-expect-error: `color` might not exist in `translations[lang].catalog` */}
      {translations[lang].catalog.color}: {translations[lang].catalog[color]}
    </span>
  )
}

export default ProductColor
