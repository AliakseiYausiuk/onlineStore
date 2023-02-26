import { formatToCurrency } from '@/utils/format-to-currency'
import { FC } from 'react'



const HotSale: FC = () => {
  return (
    <div className='text-white py-16 px-8'>
      <div className='text-sm'>HotSale</div>
      <h1 className='text-5x1 font-medium mt-5 mb-14 font-serif'>A RED DRESS WILL BRIGHTEN UP YOUR EVENING</h1>
      <div className='flex items-center justify-between'>
        <div>
          <span className='font-normal text-3x1 mr-2'>{formatToCurrency(195)}</span>
          <span className='line-through opacity-50 text-sm'>{formatToCurrency(295)}</span>
        </div>
        <button className='text-sm border-b border-[rgba(255,255,255,.2)] uppercase text-white'>Buy Now</button>
      </div>
    </div>
  )
}

export default HotSale