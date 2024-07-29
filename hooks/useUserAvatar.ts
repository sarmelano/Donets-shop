import { useUnit } from 'effector-react'
import { useState, useEffect } from 'react'
import { $user } from '@/context/user'

export const useUserAvatar = () => {
  const user = useUnit($user)
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (user.image) {
      setSrc(user.image)
      return
    }
  }, [user.image])

  return { src, alt: user.name }
}

/* import { useUnit } from 'effector-react'
import { useState, useEffect } from 'react'
import { $user } from '@/context/user'
import { IUser } from '@/types/user'

export const useUserAvatar = () => {
  const user = useUnit($user) as IUser | null
  const [src, setSrc] = useState('')
  const [alt, setAlt] = useState('')

  useEffect(() => {
    if (user?.image) {
      setSrc(user.image)
      setAlt(user.name)
    } else if (user?.name) {
      // Create icon with first letter
      const initial = user.name.charAt(0).toUpperCase()
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      if (context) {
        canvas.width = 24
        canvas.height = 24

        // Style icon
        context.fillStyle = '#ccc'
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = '#000'
        context.font = '50px Arial'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(initial, canvas.width / 2, canvas.height / 2)

        setSrc(canvas.toDataURL())
        setAlt(user.name)
      }
    }
  }, [user])

  return { src, alt }
} */
