import { User } from './database.js'
import { Request, Response } from 'express'
import { Send } from 'express-serve-static-core'

interface SignUpDataRequest extends Request {
	body: User
}

interface SignUpData {
	error: boolean
	errorDescription?: string
	email: string | null
}

interface SignUpDataResponse extends Response {
	json: Send<SignUpData, this>
}

export type { SignUpDataRequest, SignUpDataResponse, SignUpData }
