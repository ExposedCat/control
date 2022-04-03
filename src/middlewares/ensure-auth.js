import jwt from 'jsonwebtoken'
import { User } from '../models/user.js'

async function ensureAuthorized(req, res, next) {
	const token = req.cookies.jwt
	if (token) {
		try {
			const { id } = jwt.verify(token, process.env.JWT_SECRET)
			try {
				const user = await User.findOne({ _id: id })
				res.locals.user = user
				return next()
			} catch {
				res.redirect('/api/logout')
			}
		} catch {
			return res.redirect('/login')
		}
	} else {
		return res.redirect('/login')
	}
}

export { ensureAuthorized }
