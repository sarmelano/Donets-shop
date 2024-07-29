import { useRouter } from 'next/navigation'
import { setIsAuth } from '@/context/auth'

export const useUserLogout = () => {
  const router = useRouter()

  return () => {
    localStorage.removeItem('auth')
    setIsAuth(false)
    router.push('/')
    window.location.reload()
  }
}
