import { encode } from '../../services/encode.js'
import { User } from '../../models/user.js'

async function login(req, res) {
	const { email, password } = req.body
	if (email !== undefined && password !== undefined) {
		const encodedPassword = encode(password)
		const user = await User.findOne({ email })
		if (!user) {
			res.status(404).json({
				success: false,
				message: 'User with given email not found'
			})
		} else {
			if (user.password === encodedPassword) {
				res.status(200).json({
					success: true,
					message: 'User successfully logged in',
					user
				})
			} else {
				res.status(401).json({
					success: false,
					message: 'Email or password is incorrect'
				})
			}
		}
	} else {
		res.status(400).json({
			success: false,
			message: 'Email or password is not specified'
		})
	}
}

export { login }
