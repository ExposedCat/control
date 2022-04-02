$('#signup-form').addEventListener('submit', async event => {
	event.preventDefault()
	try {
		const data = await apiCall('signup', {
			email: $('#email').value,
			password: $('#password').value
		})
		if (data.success) {
			location.assign('/login')
		} else {
			alert(`Error: ${data.message}`)
		}
	} catch (error) {
		console.trace(error)
		alert('Unexpected error')
	}
})
