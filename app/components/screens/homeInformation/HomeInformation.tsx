import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import {FC} from 'react'



const HomeInformation:FC = () => {
  return (
    <Row>
      <Column size={2} className='flex-col border-t-2 border-black py-14'>
        <div className='font-medium text-5x1 text-white'>100K</div>
        <div className='text-gray text-sm'>Customers</div>
      </Column>
      <Column size={10}></Column>
    </Row>
  )
}

export default HomeInformation