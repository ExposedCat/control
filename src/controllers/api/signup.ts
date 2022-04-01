import { SignUpDataRequest, SignUpDataResponse } from '../../types/api.js'
import { signUp as signUpUser } from '../../services/signup-user.js'

async function signUp(req: SignUpDataRequest, res: SignUpDataResponse) {
	const { email, password } = req.body
	console.log(req.body)
	if (email !== undefined && password !== undefined) {
		await signUpUser(email, password)
		res.json({
			error: false,
			email
		})
	} else {
		res.json({
			error: true,
			errorDescription: 'Email or password is not specified',
			email: null
		})
	}
}

export { signUp }
