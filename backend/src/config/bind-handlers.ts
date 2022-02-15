import { Express } from 'express'

import { headingController } from '../controllers/index.js'

async function bindHandlers(app: Express) {
	app.get('/heading', headingController)
}

export { bindHandlers }
