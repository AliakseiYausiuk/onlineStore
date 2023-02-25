import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'



const Row: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <div className={cn('grid grid-cols-12 w-full border-b-2 border-black', className)}>
      {children}
    </div>
  )
}

export default Row