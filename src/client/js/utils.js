const $ = selector => document.querySelector(selector)

async function apiCall(path, data) {
	const res = await fetch(`/api/${path}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	return res.json()
}
