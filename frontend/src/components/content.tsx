import '../styles/content.css'

import { Component, ReactNode } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter, Navigate } from 'react-router-dom'

import { Home } from './pages/home'
import { Finances } from './pages/finances'

class Content extends Component {
	render = (): ReactNode => (
		<div id='content'>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/finances' element={<Finances />} />
				<Route path='*' element={<Navigate to='/home' />} />
			</Routes>
		</div>
	)
}

export { Content }
