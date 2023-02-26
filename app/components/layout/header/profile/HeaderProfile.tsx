import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'
import { FC } from 'react'
import { FiUser } from 'react-icons/fi'



const HeaderProfile: FC = () => {
  return (
    <Column size={3} className='flex items-center'>
      <SquareButton Icon={FiUser}/>
      <div className='ml-3'>
        <div className='text-gray text-sm'>Aliaksei Yausiuk</div>
      </div>
    </Column>
  )
}

export default HeaderProfile