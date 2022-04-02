import { encode } from '../../services/encode.js'
import { User } from '../../models/user.js'
import jwt from 'jsonwebtoken'

async function signUp(req, res) {
	const { email, password } = req.body
	if (email !== undefined && password !== undefined) {
		const encodedPassword = encode(password)
		try {
			const user = await User.create({
				email,
				password: encodedPassword
			})
			// JWT
			const maxAge = 3 * 60 * 60 // 3 hours
			const payload = { id: user._id, email }
			const options = { expiresIn: maxAge }
			const token = jwt.sign(payload, process.env.JWT_SECRET, options)
			res.cookie('jwt', token, {
				httpOnly: true,
				maxAge: maxAge * 1000
			})
			//
			res.status(200).json({
				success: true,
				message: 'User successfully registered',
				user
			})
		} catch {
			res.status(400).json({
				success: false,
				message: 'Email is already registered'
			})
		}
	} else {
		res.status(400).json({
			success: false,
			message: 'Email or password is not specified'
		})
	}
}

export { signUp }
