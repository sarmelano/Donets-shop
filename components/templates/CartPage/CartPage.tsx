'use client'
import HeadingWithCount from '@/components/elements/HeadingWithCount/HeadingWithCount'
import Breadcrumbs from '@/components/modules/BreadCrumbs/BreadCrumbs'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import { useCartByAuth } from '@/hooks/useCartByAuth'
import { useLang } from '@/hooks/useLang'
import { countWholeCartItemsAmount } from '@/lib/utils/cart'
import styles from '@/styles/cart-page/index.module.scss'
import cartSkeletonStyles from '@/styles/cart-skeleton/index.module.scss'
import { useUnit } from 'effector-react'
import { getCartItemsFx } from '@/api/cart'
import { motion } from 'framer-motion'
import { basePropsForMotion } from '@/constants/motion'
import CartList from '@/components/modules/CartPage/CartList'
import OrderInfoBlock from '@/components/modules/OrderInfoBlock/OrderInfoBlock'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import PromotionalCode from '@/components/modules/CartPage/PromotionalCode'
import { useState } from 'react'

const CartPage = () => {
  const cartSpinner = useUnit(getCartItemsFx.pending)
  const currentCartByAuth = useCartByAuth()
  const { lang, translations } = useLang()
  const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs('cart')
  const isMedia930 = useMediaQuery(930)
  const [isCorrectPromotionalCode, setIsCorrectPromotionalCode] =
    useState(false)

  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.cart}>
        <div className='container'>
          <HeadingWithCount
            count={countWholeCartItemsAmount(currentCartByAuth)}
            title={translations[lang].breadcrumbs.cart}
          />
          <div className={styles.cart__inner}>
            <div className={styles.cart__left}>
              {cartSpinner && (
                <motion.ul
                  {...basePropsForMotion}
                  className={cartSkeletonStyles.skeleton}
                >
                  {Array.from(new Array(3)).map((_, i) => (
                    <li key={i} className={cartSkeletonStyles.skeleton__item}>
                      <div
                        className={cartSkeletonStyles.skeleton__item__light}
                      />
                    </li>
                  ))}
                </motion.ul>
              )}
              {!cartSpinner && (
                <motion.ul
                  {...basePropsForMotion}
                  className={`list-reset ${styles.cart__list}`}
                >
                  <CartList />
                </motion.ul>
              )}
            </div>
            <div className={styles.cart__right}>
              {isMedia930 && (
                <PromotionalCode
                  setIsCorrectPromotionalCode={setIsCorrectPromotionalCode}
                />
              )}
              <div className={styles.cart__right__order}>
                <OrderInfoBlock
                  isCorrectPromotionalCode={isCorrectPromotionalCode}
                />
              </div>
            </div>
          </div>
          {!isMedia930 && (
            <PromotionalCode
              setIsCorrectPromotionalCode={setIsCorrectPromotionalCode}
            />
          )}
        </div>
      </section>
    </main>
  )
}

export default CartPage
