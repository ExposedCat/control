import { encode } from '../../services/encode.js'
import { User } from '../../models/user.js'

async function signUp(req, res) {
	const { email, password } = req.body
	if (email !== undefined && password !== undefined) {
		const encodedPassword = encode(password)
		try {
			const user = await User.create({
				email,
				password: encodedPassword
			})
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
