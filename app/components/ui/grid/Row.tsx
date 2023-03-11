import cn from 'clsx'
import { CSSProperties, FC, PropsWithChildren } from 'react'

interface IRow {
  className?: string
  isBorder?: boolean
  style?: CSSProperties
}


const Row: FC<PropsWithChildren<IRow>> = ({ children, className, isBorder, style = {} }) => {
  return (
    <div className={cn('grid grid-cols-12 w-full', {
      'border-b-2 border-black border-solid': isBorder
    }, className)}
      style={style}
    >
      {children}
    </div>
  )
}

export default Row