import Image from 'next/image'
import currency from '@/public/img/NonexistentCurrency.svg'

const NonexistentCurrency = () => (
  <Image
    src={currency}
    alt='Non-existent Currency'
    className='nonexistentCurrency'
  />
)

export default NonexistentCurrency
