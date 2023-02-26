import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'



const Row: FC<PropsWithChildren<{ className?: string, isBorder?: boolean }>> = ({ children, className, isBorder }) => {
  return (
    <div className={cn('grid grid-cols-12 w-full', {
      'border-b-2 border-black border-solid': isBorder
    }, className)}>
      {children}
    </div>
  )
}

export default Row