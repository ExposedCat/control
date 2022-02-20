import '../styles/app.css'

import { Sidebar } from './sidebar'
import { Header } from './header'
import { Content } from './content'
import { Footer } from './footer'

function App() {
	return (
		<div id='App'>
			<Sidebar />
			<div className='side-wrapper'>
				<Header />
				<Content />
				<Footer />
			</div>
		</div>
	)
}

export { App }
