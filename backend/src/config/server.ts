import express from 'express'

function setupServer() {
	const app = express()

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	return {
		app,
		launchServer: (port: number) =>
			app
				.listen(port, () => {
					console.info(`Server is running on ${port}`)
				})
				.on('error', error => {
					console.error(`Can't start server:`)
					console.error(error)
				})
	}
}

export { setupServer }
