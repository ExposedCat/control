function home(req, res) {
	res.render('pages/index', {
		pageName: 'Home'
	})
}

export { home }
