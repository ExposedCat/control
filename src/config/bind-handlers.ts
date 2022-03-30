import { Express } from 'express'

import { getUserFinancesData } from '../controllers/index.js'

async function bindHandlers(app: Express) {
	app.get('/getUserFinancesData', getUserFinancesData)
}

export { bindHandlers }
