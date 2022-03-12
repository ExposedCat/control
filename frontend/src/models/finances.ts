type FinancesData = {
	monthlyIncome: number,
	monthlyOutcome: number,
	dailyBudget: number
}

type FinancesDataState = FinancesData & {
	lastFetched: number
}

export { type FinancesData, type FinancesDataState }
