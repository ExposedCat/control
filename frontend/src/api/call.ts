import axios, { Method, AxiosResponse } from 'axios'
import { ApiResponse } from '../models/api'

function validateStatus(status: number) {
	return status < 500
}

async function apiCall(
	method: Method,
	path: string,
	params: {}
): Promise<ApiResponse> {
	const isGet = method === 'get' || method === 'GET'
	const data = isGet ? { params } : { data: params }
	try {
		const response = await axios({
			method,
			url: path,
			baseURL: process.env.BACKEND_URL,
			validateStatus,
			...data
		})
		return response.data as ApiResponse
	} catch (error) {
		if (error instanceof Error) {
			return {
				error: true,
				errorMessage: error.message,
				data: null
			}
		}
		return {
			error: true,
			errorMessage: String(error),
			data: null
		}
	}
}

export { apiCall }
