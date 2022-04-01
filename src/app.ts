import { setupServer } from './config/server.js'
import { setupDatabase } from './config/database.js'
import { bindHandlers } from './config/bind-handlers.js'
import { loadConfig } from './config/load-config.js'

const { app, launchServer } = setupServer()
const { launchDatabase } = setupDatabase()

bindHandlers(app)

loadConfig()

if (process.env.DB_NAME) {
	if (process.env.DB_ADDRESS) {
		if (process.env.DB_PORT) {
			launchDatabase(
				process.env.DB_ADDRESS,
				process.env.DB_PORT,
				process.env.DB_NAME
			)
		} else {
			console.error('ERROR: DB_PORT is not specified')
			process.exit(2)
		}
	} else {
		console.error('ERROR: DB_ADDRESS is not specified')
		process.exit(3)
	}
} else {
	console.error('ERROR: DB_NAME is not specified')
	process.exit(4)
}

if (process.env.PORT) {
	launchServer(Number(process.env.PORT))
} else {
	console.error('ERROR: PORT is not specified')
	process.exit(1)
}
