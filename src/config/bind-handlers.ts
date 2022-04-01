import { Application } from 'express'

import * as handlers from '../controllers/index.js'

async function bindHandlers(app: Application) {
	// Pages
	app.get('/', handlers.home)
	app.get('/error', handlers.error)
	app.get('/signup', handlers.signUp)

	// Api
	app.post('/api/signup', handlers.apiSignUp)
}

export { bindHandlers }
