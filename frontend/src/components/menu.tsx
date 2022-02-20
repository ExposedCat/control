import '../styles/menu.css'

import { Component, ReactNode } from 'react'
import { Link } from 'react-router-dom'

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
					path={menuEntry.path}
				/>
			))}
		</div>
	)
}

class MenuEntry extends Component<MenuEntryProps> {
	render = (): ReactNode => (
		<Link className='menuentry' id={this.props.id} to={this.props.path}>
			<img
				className='menuentry-icon'
				src={require(`../assets/icons/${this.props.iconName}`)}
				alt='X'
			/>
			<p>{this.props.label}</p>
		</Link>
	)
}

export { Menu }
