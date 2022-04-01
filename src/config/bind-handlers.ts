import { Application } from 'express'

import * as handlers from '../controllers/index.js'

async function bindHandlers(app: Application) {
	// Pages
	app.get('/', handlers.home)
	app.get('/error', handlers.error)

async function bindHandlers(app: Express) {
	app.get('/getUserFinancesData', getUserFinancesData)
}

export { bindHandlers }
