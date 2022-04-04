import path from 'path'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import expressLayouts from 'express-ejs-layouts'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function setupServer(sessionSecret) {
	const app = express()

	app.use(cookieParser())
	app.use(
		session({
			secret: sessionSecret,
			resave: false,
			saveUninitialized: true,
			cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
		})
	)

	app.use(expressLayouts)
	app.set('layout', 'partials/layout.ejs')
	app.set('views', path.join(__dirname, '../client/views'))
	app.set('view engine', 'ejs')

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
