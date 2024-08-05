import { createDomain, createEffect, sample } from 'effector'
import toast from 'react-hot-toast'
import { addProductToCartFx, updateCartItemCountFx } from '@/api/cart'
import { handleJWTError } from '@/lib/utils/errors'
import {
  IAddProductsFromLSToCartFx,
  IAddProductToCartFx,
  ICartItem,
  IUpdateCartItemCountFx,
} from '@/types/cart'
import api from '../api/apiInstance'

export const addProductsFromLSToCartFx = createEffect(
  async ({ jwt, cartItems }: IAddProductsFromLSToCartFx) => {
    try {
      const { data } = await api.post(
        '/api/cart/add-many',
        { items: cartItems },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      )

      if (data?.error) {
        const newData: { cartItems: ICartItem[] } = await handleJWTError(
          data.error.name,
          {
            repeatRequestMethodName: 'addProductsFromLSToCartFx',
            payload: { items: cartItems },
          }
        )
        return newData
      }

      loadCartItems({ jwt })
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

const cart = createDomain()

export const loadCartItems = cart.createEvent<{ jwt: string }>()
export const setCartFromLS = cart.createEvent<ICartItem[]>()
export const addProductToCart = cart.createEvent<IAddProductToCartFx>()
export const addProductsFromLSToCart =
  cart.createEvent<IAddProductsFromLSToCartFx>()
export const updateCartItemCount = cart.createEvent<IUpdateCartItemCountFx>()

export const $cart = cart
  .createStore<ICartItem[]>([])
  .on(addProductsFromLSToCartFx.done, (_, { result }) => result.items)
  .on(addProductToCartFx.done, (cart, { result }) => [
    ...new Map(
      [...cart, result.newCartItem].map((item) => [item.clientId, item])
    ).values(), //not dublicate obj with same fields
  ])
  .on(
    updateCartItemCountFx.done,
    (cart, { result }) =>
      cart.map((item) =>
        item._id === result.id ? { ...item, count: result.count } : item
      ) //set count in element we need (at store)
  )

export const $cartFromLs = cart
  .createStore<ICartItem[]>([])
  .on(setCartFromLS, (_, cart) => cart)

sample({
  clock: addProductToCart,
  source: $cart,
  fn: (_, data) => data,
  target: addProductToCartFx,
})

sample({
  clock: addProductsFromLSToCart,
  source: $cart,
  fn: (_, data) => data,
  target: addProductsFromLSToCartFx,
})

sample({
  clock: updateCartItemCount,
  source: $cart,
  fn: (_, data) => data,
  target: updateCartItemCountFx,
})
