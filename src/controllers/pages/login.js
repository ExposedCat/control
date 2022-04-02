function login(req, res) {
	res.render('pages/login', {
		pageName: 'Login'
	})
}

export { login }
