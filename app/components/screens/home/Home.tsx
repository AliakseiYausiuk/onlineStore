import { FC } from 'react'

import Layout from '@/layout/Layout'

import { IProductsPage } from '@/../pages'
import Row from '@/ui/grid/Row'
import Column from '@/ui/grid/Column'
import Image from 'next/image'
import HotSale from '../hotSale/HotSale'
import HomeInformation from '../homeInformation/HomeInformation'


const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, 
			sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row className='bg-dark-primary'>
				<Column size={7} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={720} height={628}/>
				</Column>
				<Column size={5} isCenter={false} className='flex-col justify-between' isPadding={false}>
					<HotSale/>
					<HomeInformation/>
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
