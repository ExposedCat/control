import { ErrorPageRequest } from '../../types/pages.js'
import { Response } from 'express'

function error(req: ErrorPageRequest, res: Response) {
	res.render('pages/error', {
		pageName: 'Error',
		error: req.body.error
	})
}

export { error }
