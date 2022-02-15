import { setupServer } from './config/server.js'
import { bindHandlers } from './config/bind-handlers.js'
import { loadConfig } from './config/load-config.js'

const { app, launchServer } = setupServer()

bindHandlers(app)

loadConfig()

if (process.env.PORT) {
	launchServer(Number(process.env.PORT))
} else {
	console.error('ERROR: PORT is not specified')
    process.exit(1)
}
