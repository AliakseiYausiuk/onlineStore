import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import { FC } from 'react'



const HomeInformation: FC = () => {
  return (
    <Row>
      <Column size={3} className='flex-col border-t-2 border-black py-14'>
        <div className='font-medium text-5x1 text-white'>100K</div>
        <div className='text-gray text-sm'>Customers</div>
      </Column>
      <Column size={9} className='flex-col border-t-2 border-black py-14' isBorder={false}>
        <div className='p-10'>
          <div className='font-medium text-5x1 text-white mb-2'>New collection</div>
          <div className='text-gray text-sm'>
            The red dress was inspired by a love of fashion and a fear of complacency.
            Our challenge was to create a dress.
          </div>
        </div>
      </Column>
    </Row>
  )
}

export default HomeInformation