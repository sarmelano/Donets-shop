import { useLang } from '@/hooks/useLang'
import styles from '@/styles/empty-content/index.module.scss'

const ContentTitle = () => {
  const { lang, translations } = useLang()

  return (
    <div className={styles.empty_content__title}>
      <span>{translations[lang].common.oh}</span>
      <span>{translations[lang].common.empty_text}</span>
    </div>
  )
}

export default ContentTitle

/* import { IContentTitleProps } from '@/types/modules'
import styles from '@/styles/empty-content/index.module.scss'

const ContentTitle = ({ title, oopsWord }: IContentTitleProps) => (
  <div className={styles.empty_content__title}>
    <span>{oopsWord}</span>
    <span>{title}</span>
  </div>
)

export default ContentTitle
 */
