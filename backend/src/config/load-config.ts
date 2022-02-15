import path from 'path/posix'
import { config } from 'dotenv'

function loadConfig() {
	config({
		path: path.resolve('config.env')
	})
}

export { loadConfig }
