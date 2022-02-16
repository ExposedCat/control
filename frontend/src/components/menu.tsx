import '../styles/menu.css'

import { Component, ReactNode } from 'react'

import { MenuEntryProps, MenuProps } from '../models/menu'

class Menu extends Component<MenuProps> {
	render = (): ReactNode => (
		<div id='menu'>
			{this.props.entries.map(menuEntry => (
				<MenuEntry
					iconName={menuEntry.iconName}
					label={menuEntry.label}
					id={menuEntry.id}
					key={menuEntry.id}
				/>
			))}
		</div>
	)
}

class MenuEntry extends Component<MenuEntryProps> {
	render = (): ReactNode => (
		<div className='menuentry' id={this.props.id}>
			<img
				className='menuentry-icon'
				src={require(`../assets/icons/${this.props.iconName}`)}
				alt='X'
			/>
			<p>{this.props.label}</p>
		</div>
	)
}

export { Menu }
