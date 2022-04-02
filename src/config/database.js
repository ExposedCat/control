import mongoose from 'mongoose'
import { User } from '../models/user.js'

function setupDatabase() {
	mongoose.Promise = global.Promise

	const connectOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}

	return {
		launchDatabase: async (address, port, name) => {
			const connection = mongoose.connect(
				`mongodb://${address}:${port}/${name}`,
				connectOptions
			)
			// Clear database
			await User.deleteMany()
			//
			return connection
		}
	}
}

export { setupDatabase }
