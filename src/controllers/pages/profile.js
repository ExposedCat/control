function profile(req, res) {
	res.render('pages/profile', {
		pageName: 'Profile',
		id: res.locals.user.id,
		email: res.locals.user.email
	})
}

export { profile }
