import mongoose from 'mongoose'
import { ConnectOptions } from 'mongodb'

function setupDatabase() {
	mongoose.Promise = global.Promise

	const connectOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	} as ConnectOptions

	return {
		launchDatabase: (address: string, port: string, name: string) =>
			mongoose.connect(
				`mongodb://${address}:${port}/${name}`,
				connectOptions
			)
	}
}

export { setupDatabase }
