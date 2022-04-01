import { Request, Response } from 'express'

function signUp(req: Request, res: Response) {
	res.render('pages/signup', {
		pageName: 'Sign Up'
	})
}

export { signUp }
