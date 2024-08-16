import Image from 'next/image'
import { ICartItem } from '@/types/cart'
import { useCartItemAction } from '@/hooks/useCartItemAction'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { formatPrice } from '@/lib/utils/common'
import ProductCounter from '../ProductsListItem/ProductCounter'
import styles from '@/styles/cart-page/index.module.scss'
import NonexistentCurrency from '@/components/elements/NonexistentCurrency/NonexistentCurrency'

const CartListItem = ({ item }: { item: ICartItem }) => {
  const {
    deleteSpinner,
    increasePriceWithAnimation,
    decreasePriceWithAnimation,
    animatedPrice,
    count,
    setCount,
    handleDeleteCartItem,
  } = useCartItemAction(item)
  const isMedia530 = useMediaQuery(530)
  const imageSize = isMedia530 ? 132 : 160

  return (
    <>
      <button
        disabled={deleteSpinner}
        className={`btn-reset ${styles.cart__list__item__delete}`}
        onClick={handleDeleteCartItem}
      >
        <span />
      </button>
      <div
        className={`${styles.cart__list__item__img} ${styles.cart__list__item__block}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          width={imageSize}
          height={imageSize}
        />
      </div>
      <div className={styles.cart__list__item__wrapper}>
        <div
          className={`${styles.cart__list__item__name} ${styles.cart__list__item__block}`}
        >
          {item.name}
        </div>
        <div
          className={`${styles.cart__list__item__size} ${styles.cart__list__item__block}`}
        >
          Size: {item.size.toUpperCase()}
        </div>
      </div>
      <div className={styles.cart__list__item__inner}>
        <div
          className={`${styles.cart__list__item__initial} ${styles.cart__list__item__inner__block}`}
        >
          <span
            className={`${styles.cart__list__item__price} ${styles.cart__list__item__initial__price}`}
          >
            {formatPrice(+item.price)} <NonexistentCurrency />
          </span>
          <span className={styles.cart__list__item__initial__text}>
            Item price
          </span>
        </div>
        <ProductCounter
          // eslint-disable-next-line max-len
          className={`cart-list__item__counter ${styles.cart__list__item__counter} ${styles.cart__list__item__inner__block}`}
          count={count}
          setCount={setCount}
          increasePrice={increasePriceWithAnimation}
          decreasePrice={decreasePriceWithAnimation}
          cartItem={item}
          updateCountAsync
        />
        <div
          className={`${styles.cart__list__item__price} ${styles.cart__list__item__inner__block}`}
        >
          {formatPrice(animatedPrice)} <NonexistentCurrency />
        </div>
      </div>
    </>
  )
}

export default CartListItem
