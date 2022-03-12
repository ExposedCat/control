import '../../styles/finances.css'

import { Component, ReactNode } from 'react'

import { FinancesData } from '../../models/finances'

import { getUserFinancesData } from '../../api/finances'

class Finances extends Component<{}, FinancesData> {
	constructor(props: {}) {
		super(props)
		this.state = {
			monthlyIncome: 0,
			monthlyOutcome: 0,
			dailyBudget: 0
		}
	}

	async componentDidMount(): Promise<void> {
		const response = await getUserFinancesData(1)
		if (response.error) {
			alert(response.errorMessage)
		} else {
			this.setState(response.data)
		}
	}

	render = (): ReactNode => (
		<>
			<h1>Finances</h1>
			<div>
				<p>Monthly income: </p>
				<span id='monthly-income'>${this.state.monthlyIncome}</span>
			</div>
			<div>
				<p>Monthly outcome: </p>
				<span id='monthly-outcome'>${this.state.monthlyOutcome}</span>
			</div>
			<div>
				<p>Daily budget: </p>
				<span id='daily-budget'>${this.state.dailyBudget}</span>
			</div>
		</>
	)
}

export { Finances }
