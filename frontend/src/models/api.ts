import { FinancesData } from './finances'

type ApiResponse = {
	error: boolean
	errorMessage?: string
	data: FinancesData | null
}

export { type ApiResponse }
