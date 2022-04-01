import { encode } from './encode.js'
import { User } from '../models/user.js'

function signUp(email: string, password: string) {
	const encodedPassword = encode(password)
	return User.signUp(email, encodedPassword)
}

export { signUp }
