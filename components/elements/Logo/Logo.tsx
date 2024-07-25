'use client'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <Link className='logo' href='/'>
    <Image
      className='logo__img'
      src='/img/logo.svg'
      alt='Donets shop Logo'
      width={100}
      height={100}
    />
  </Link>
)

export default Logo
