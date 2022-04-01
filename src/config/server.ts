import path from 'path'
import express, { Application } from 'express'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function setupServer() {
	const app: Application = express()

	app.set('views', path.join(__dirname, '../views'))
	app.set('view engine', 'ejs')

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.use(express.static(path.join(__dirname, '../public')))

	return {
		app,
		launchServer: (port: number) =>
			app
				.listen(port, () => {
					console.log(path.join(__dirname, '../public'))
					console.info(`Server is running on ${port}`)
				})
				.on('error', error => {
					console.error(`Can't start server:`)
					console.error(error)
				})
	}
}

export { setupServer }
