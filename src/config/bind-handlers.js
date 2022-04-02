import * as handlers from '../controllers/index.js'

async function bindHandlers(app) {
	// Pages
	app.get('/', handlers.home)
	app.get('/login', handlers.login)
	app.get('/signup', handlers.signUp)
	app.get('/profile', handlers.profile)

	// Api
	app.post('/api/login', handlers.apiLogin)
	app.post('/api/signup', handlers.apiSignUp)
}

export { bindHandlers }
