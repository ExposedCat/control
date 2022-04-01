import { Request } from 'express'

interface ErrorPageRequest extends Request {
	body: {
		error: string
	}
}

export type { ErrorPageRequest }
