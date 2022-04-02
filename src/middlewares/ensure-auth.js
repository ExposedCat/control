import jwt from 'jsonwebtoken'

function ensureAuthorized(req, res, next) {
	const token = req.cookies.jwt
	if (token) {
		try {
			const user = jwt.verify(token, process.env.JWT_SECRET)
			res.locals.user = user
			return next()
		} catch {
			return res.status(401).json({
				success: false,
				message: 'Not authorized'
			})
		}
	} else {
		return res.status(401).json({
			success: false,
			message: 'Not authorized'
		})
	}
}

export { ensureAuthorized }
