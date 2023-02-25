import Row from '@/ui/grid/Row'
import { FC } from 'react'
import HeaderButtons from './buttons/HeaderButtons'

import styles from './Header.module.scss'

import HeaderLogo from './logo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'


const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
			</Row>
		</header>
	)
}

export default Header
