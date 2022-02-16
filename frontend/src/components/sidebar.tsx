import '../styles/sidebar.css'

import { Component, ReactNode } from 'react'

import { Menu } from './menu'
import { menuEntryList } from '../data/menu'

class Sidebar extends Component {
	render = (): ReactNode => (
		<div id='sidebar'>
			<div id='logo'>
				<img src={require('../assets/logo192.png')} alt='Logo' />
				<span id='logo-name'>Control</span>
			</div>
			<Menu entries={menuEntryList} />
			<button id='logout'>Log Out</button>
		</div>
	)
}

export { Sidebar }
