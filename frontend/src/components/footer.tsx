import '../styles/footer.css'

import { Component, ReactNode } from 'react'

class Footer extends Component {
	render = (): ReactNode => (
		<div id='footer'>
			<p>Powered by Artem Prokop a.k.a ExposedCat | 2022</p>
		</div>
	)
}

export { Footer }
