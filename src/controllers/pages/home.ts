import { Request, Response } from 'express'

function home(req: Request, res: Response) {
	res.render('pages/index', {
		pageName: 'Home'
	})
}

export { home }
