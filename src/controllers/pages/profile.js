function profile(req, res) {
	res.render('pages/profile', {
		pageName: 'Profile',
		email: 'req.user.email'
	})
}

export { profile }
