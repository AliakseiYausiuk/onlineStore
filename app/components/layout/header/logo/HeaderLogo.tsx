import Column from '@/ui/grid/Column'
import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'



const HeaderLogo: FC = (props: any) => {
  return (
    <Column size={2}>
      <Link href='/' className='flex items-center'>
        <Image
          src='/images/logo.svg'
          width={100}
          height={100}
          alt='Lorian store'
          className='-mr-4'
        />
        <span>
          <span className='text-white tracking-[0.13em] block font-light'>LORIAN</span>
          <span className='text-sm text-dark-gray tracking-[0.4em] block font-extralinght'>STORE</span>
        </span>
      </Link>
    </Column>
  )
}

export default HeaderLogo