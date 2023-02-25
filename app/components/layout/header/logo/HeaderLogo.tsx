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
        />
        <span>
          <span className='text-white mb-4'>LORIAN</span>
          <span className='text-gray tracking-wider'>STORE</span>
        </span>
      </Link>
    </Column>
  )
}

export default HeaderLogo