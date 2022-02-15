import React, { Component, ReactNode } from 'react'
import { HeadingResponse } from '../models/api-responses.js'
import axios from 'axios'

type State = {
	error: Error | null
	isLoaded: boolean
	content: string
}

class Heading extends Component<{}, State> {
	constructor(props: {}) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			content: ''
		}
	}

	componentDidMount() {
		axios
			.get('/heading')
			.then(response => response.data as HeadingResponse)
			.then(
				data =>
					this.setState({
						isLoaded: true,
						content: data.heading
					}),
				error =>
					this.setState({
						isLoaded: true,
						error
					})
			)
	}

	render(): ReactNode {
		const { error, isLoaded, content } = this.state

		if (error) {
			return (
				<>
					<h1>Error</h1>
					<p>{error.message}</p>
				</>
			)
		} else if (!isLoaded) {
			return <h1>Loading...</h1>
		} else {
			return <h1>{content}</h1>
		}
	}
}

export { Heading }
