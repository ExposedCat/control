function signUp(req, res) {
	res.render('pages/signup', {
		pageName: 'Sign Up'
	})
}

export { signUp }
