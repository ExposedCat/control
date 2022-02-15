import { Request, Response } from 'express'

function headingController(request: Request, response: Response) {
	response.json({
		heading: `Home`
	})
}

export { headingController }
