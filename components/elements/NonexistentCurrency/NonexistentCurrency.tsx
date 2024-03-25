import Image from 'next/image'

const NonexistentCurrency = () => (
  <Image
    src='/img/NonexistentCurrency.svg'
    alt='Non-existent Currency'
    className='nonexistentCurrency'
    width={32}
    height={20}
  />
)

export default NonexistentCurrency
