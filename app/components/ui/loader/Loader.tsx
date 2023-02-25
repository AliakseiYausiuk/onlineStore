import { FC } from 'react'
import spinnerImg from './Spinner-1s-200px.svg'

import { COLORS } from '@/config/color.config'

const Loader: FC = () => {
	return (
		<img src={spinnerImg.src} alt='Loader' width={200} height={200}/>
	)
}

export default Loader
