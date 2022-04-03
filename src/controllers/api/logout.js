async function logOut(req, res) {
    // Remove logged-in cookie
	res.cookie('jwt', '', { maxAge: 1 })
	res.redirect('/login')
}

export { logOut }
