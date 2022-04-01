const $ = selector => document.querySelector(selector)

$('#signup-form').addEventListener('submit', async event => {
	event.preventDefault()
	const apiResponse = await fetch('/api/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: $('#email').value,
			password: $('#password').value
		})
	})

	const { error, errorDescription, email } = await apiResponse.json()
	if (error) {
		alert(errorDescription)
	} else {
		alert(email)
	}
})
