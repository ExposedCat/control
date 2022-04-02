import path from 'path'
import express from 'express'
import session from 'express-session'
import partials from 'express-partials'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function setupServer(sessionSecret) {
	const app = express()

	app.use(
		session({
			secret: sessionSecret,
			resave: false,
			saveUninitialized: true,
			cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
		})
	)

	app.set('views', path.join(__dirname, '../client/views'))
	app.set('view engine', 'ejs')
	app.use(partials())

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.use(express.static(path.join(__dirname, '../client')))

	return {
		app,
		launchServer: port =>
			app
				.listen(port, () => {
					console.log(path.join(__dirname, '../client'))
					console.info(`Server is running on ${port}`)
				})
				.on('error', error => {
					console.error(`Can't start server:`)
					console.error(error)
				})
	}
}

export { setupServer }
